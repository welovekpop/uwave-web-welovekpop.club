import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import assign from 'object-assign';
import except from 'except';
import escapeStringRegExp from 'escape-string-regexp';
import findIndex from 'array-findindex';
import indexBy from 'index-by';
import mapObj from 'object.map';
import { LOAD_ALL_PLAYLISTS_COMPLETE, LOAD_PLAYLIST_START, LOAD_PLAYLIST_COMPLETE, PLAYLIST_CYCLED, SELECT_PLAYLIST, ACTIVATE_PLAYLIST_START, ACTIVATE_PLAYLIST_COMPLETE, CREATE_PLAYLIST_START, CREATE_PLAYLIST_COMPLETE, RENAME_PLAYLIST_START, RENAME_PLAYLIST_COMPLETE, DELETE_PLAYLIST_START, DELETE_PLAYLIST_COMPLETE, ADD_MEDIA_START, ADD_MEDIA_COMPLETE, REMOVE_MEDIA_START, REMOVE_MEDIA_COMPLETE, MOVE_MEDIA_START, MOVE_MEDIA_COMPLETE, UPDATE_MEDIA_START, UPDATE_MEDIA_COMPLETE, FILTER_PLAYLIST_ITEMS, FILTER_PLAYLIST_ITEMS_COMPLETE } from '../constants/actionTypes/playlists';
import { DO_FAVORITE_COMPLETE } from '../constants/actionTypes/votes';
import { SEARCH_START, SEARCH_DELETE } from '../constants/actionTypes/search';
var initialState = {
  playlists: {},
  playlistItems: {},
  activePlaylistID: null,
  selectedPlaylistID: null,
  currentFilter: {}
};

function deselectAll(playlists) {
  return mapObj(playlists, function (playlist) {
    return playlist.selected ? _objectSpread({}, playlist, {
      selected: false
    }) : playlist;
  });
}

function processInsert(list, insert, position) {
  var insertIdx = 0;

  if (position.at === 'end') {
    insertIdx = list.length;
  } else if (position.at === 'start') {
    insertIdx = 0;
  } else if (position.after != null && position.after !== -1) {
    insertIdx = findIndex(list, function (media) {
      return media !== null && media._id === position.after;
    }) + 1;
  }

  return list.slice(0, insertIdx).concat(insert, list.slice(insertIdx));
} // Moves a list of media items to a given position in the playlist.


function processMove(list, movedMedia, location) {
  // Take all moved media items out of the playlist…
  var wasMoved = indexBy(movedMedia, '_id');
  var newPlaylist = list.filter(function (media) {
    return media === null || !wasMoved[media._id];
  }); // …and add them back in at the correct place.

  return processInsert(newPlaylist, movedMedia, location);
}

function updatePlaylist(state, playlistID, modify) {
  var playlist = state.playlists[playlistID];

  if (playlist) {
    var _objectSpread2;

    return _objectSpread({}, state, {
      playlists: _objectSpread({}, state.playlists, (_objectSpread2 = {}, _objectSpread2[playlistID] = modify(playlist), _objectSpread2))
    });
  }

  return state;
} // Applies a function to the media list belonging to `playlistID` if it is found
// locally, i.e. in either the active or the selected playlist.


function updatePlaylistItems(state, playlistID, modify) {
  var playlist = state.playlists[playlistID];
  var media = state.playlistItems[playlistID];

  if (playlist) {
    var _objectSpread3;

    var nextFilter = state.currentFilter;

    if (state.selectedPlaylistID === playlistID && nextFilter) {
      nextFilter = _objectSpread({}, nextFilter, {
        items: modify(nextFilter.items || [], playlist)
      });
    }

    return _objectSpread({}, state, {
      playlistItems: _objectSpread({}, state.playlistItems, (_objectSpread3 = {}, _objectSpread3[playlistID] = modify(media || [], playlist), _objectSpread3)),
      currentFilter: nextFilter
    });
  }

  return state;
}

function updatePlaylistAndItems(state, playlistID, modifyPlaylist, modifyItems) {
  var newState = updatePlaylist(state, playlistID, modifyPlaylist);
  return updatePlaylistItems(newState, playlistID, modifyItems);
}

function setPlaylistLoading(state, id, loading) {
  if (loading === void 0) {
    loading = true;
  }

  return updatePlaylist(state, id, function (playlist) {
    return _objectSpread({}, playlist, {
      loading: loading
    });
  });
}

function fill(array, value) {
  for (var i = 0, l = array.length; i < l; i += 1) {
    array[i] = value; // eslint-disable-line no-param-reassign
  }

  return array;
}

function mergePlaylistPage(size, oldMedia, newMedia, _ref) {
  var page = _ref.page,
      pageSize = _ref.pageSize;
  var media = fill(Array(size), null);
  oldMedia.forEach(function (item, i) {
    media[i] = item;
  });
  newMedia.forEach(function (item, i) {
    media[page * pageSize + i] = item;
  });
  return media;
}

function filterCachedPlaylistItems(state, playlistID, filter) {
  var rx = new RegExp(escapeStringRegExp(filter), 'i');
  var playlist = state.playlistItems[playlistID];

  if (playlist) {
    return playlist.filter(function (item) {
      return item && (rx.test(item.artist) || rx.test(item.title));
    });
  }

  return [];
}

export default function reduce(state, action) {
  var _assign2;

  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload,
      meta = _action.meta,
      error = _action.error;

  switch (type) {
    case LOAD_ALL_PLAYLISTS_COMPLETE:
      return _objectSpread({}, state, {
        playlists: indexBy(payload.playlists, '_id')
      });

    case ACTIVATE_PLAYLIST_START:
      // TODO use a different property here so we can show a loading icon on
      // the "Active" button only, instead of on top of the entire playlist
      return setPlaylistLoading(state, payload.playlistID);

    case ACTIVATE_PLAYLIST_COMPLETE:
      if (error) {
        return setPlaylistLoading(state, meta.playlistID, false);
      }

      return _objectSpread({}, state, {
        // set `active` property on all playlists
        playlists: mapObj(state.playlists, function (playlist) {
          return _objectSpread({}, playlist, {
            loading: playlist._id === payload.playlistID ? false : playlist.loading,
            active: playlist._id === payload.playlistID
          });
        }),
        activePlaylistID: payload.playlistID
      });

    case SELECT_PLAYLIST:
      return _objectSpread({}, state, {
        // set `selected` property on playlists
        playlists: mapObj(state.playlists, function (playlist) {
          return _objectSpread({}, playlist, {
            selected: playlist._id === payload.playlistID
          });
        }),
        selectedPlaylistID: payload.playlistID
      });

    case SEARCH_START:
      // We deselect playlists when doing a search, so the UI can switch to the
      // search results view instead.
      return _objectSpread({}, state, {
        playlists: deselectAll(state.playlists),
        selectedPlaylistID: null
      });

    case SEARCH_DELETE:
      // Select the active playlist when search results are closed while they
      // were focused.
      if (state.selectedPlaylistID) return state;
      return _objectSpread({}, state, {
        playlists: mapObj(state.playlists, function (playlist) {
          return _objectSpread({}, playlist, {
            selected: playlist.active
          });
        }),
        selectedPlaylistID: state.activePlaylistID
      });

    case LOAD_PLAYLIST_START:
      {
        if (meta.sneaky || meta.page !== 0 || state.playlistItems[payload.playlistID]) {
          return state;
        } // Reserve space in the playlistItems array.


        return updatePlaylistItems(state, payload.playlistID, function (items, playlist) {
          return fill(Array(playlist.size), null).map(function (item, i) {
            return items[i] || item;
          });
        });
      }

    case LOAD_PLAYLIST_COMPLETE:
      if (error) {
        return setPlaylistLoading(state, meta.playlistID, false);
      }

      return updatePlaylistAndItems(state, payload.playlistID, function (playlist) {
        return _objectSpread({}, playlist, {
          loading: false
        });
      }, function (items) {
        return mergePlaylistPage(meta.size, items, payload.media, meta);
      });

    case FILTER_PLAYLIST_ITEMS:
      // Only the selected playlist can be filtered.
      if (payload.playlistID !== state.selectedPlaylistID) {
        return state;
      }

      if (!payload.filter) {
        return _objectSpread({}, state, {
          currentFilter: null
        });
      }

      return _objectSpread({}, state, {
        currentFilter: {
          playlistID: payload.playlistID,
          filter: payload.filter,
          items: filterCachedPlaylistItems(state, payload.playlistID, payload.filter)
        }
      });

    case FILTER_PLAYLIST_ITEMS_COMPLETE:
      {
        // Only the selected playlist can be filtered.
        if (payload.playlistID !== state.selectedPlaylistID) {
          return state;
        }

        var _state = state,
            currentFilter = _state.currentFilter;
        var items = mergePlaylistPage(meta.size, currentFilter.items, payload.media, meta);
        return _objectSpread({}, state, {
          currentFilter: _objectSpread({}, currentFilter, {
            items: items
          })
        });
      }

    case PLAYLIST_CYCLED:
      return updatePlaylistItems(state, payload.playlistID, function (items, playlist) {
        var newItems = items.slice(1);
        newItems[playlist.size - 1] = items[0]; // eslint-disable-line prefer-destructuring

        return newItems;
      });
    // here be dragons
    // TODO find a simpler way to store this stuff, that doesn't involve keeping
    // millions of properties (six properties to be precise) in sync
    // Playlists that are being created have a temporary ID that is used until the
    // real ID comes back from the server.

    case CREATE_PLAYLIST_START:
      {
        var _assign;

        var newPlaylist = {
          _id: meta.tempId,
          name: payload.name,
          description: payload.description,
          shared: payload.shared,
          selected: true,
          creating: true
        };
        return _objectSpread({}, state, {
          playlists: assign(deselectAll(state.playlists), (_assign = {}, _assign[meta.tempId] = newPlaylist, _assign)),
          selectedPlaylistID: meta.tempId
        });
      }

    case CREATE_PLAYLIST_COMPLETE:
      if (error) {
        return _objectSpread({}, state, {
          playlists: except(state.playlists, "" + meta.tempId)
        });
      }

      return _objectSpread({}, state, {
        playlists: assign(deselectAll(except(state.playlists, "" + meta.tempId)), (_assign2 = {}, _assign2[payload.playlist._id] = _objectSpread({}, payload.playlist, {
          selected: true
        }), _assign2)),
        selectedPlaylistID: payload.playlist._id
      });

    case RENAME_PLAYLIST_START:
      return setPlaylistLoading(state, payload.playlistID);

    case RENAME_PLAYLIST_COMPLETE:
      {
        if (error) {
          return setPlaylistLoading(state, meta.playlistID, false);
        }

        var renamedPlaylist = state.playlists[payload.playlistID];

        if (renamedPlaylist) {
          return updatePlaylist(state, payload.playlistID, function (playlist) {
            return _objectSpread({}, playlist, {
              name: payload.name,
              loading: false
            });
          });
        }

        return state;
      }

    case DELETE_PLAYLIST_START:
      return setPlaylistLoading(state, payload.playlistID);

    case DELETE_PLAYLIST_COMPLETE:
      if (error) {
        return setPlaylistLoading(state, meta.playlistID, false);
      }

      return _objectSpread({}, state, {
        // When deleting the selected playlist, select the active playlist instead.
        selectedPlaylistID: state.selectedPlaylistID === payload.playlistID ? state.activePlaylistID : state.selectedPlaylistID,
        playlists: except(state.playlists, payload.playlistID)
      });

    case ADD_MEDIA_START:
      return setPlaylistLoading(state, payload.playlistID);

    case ADD_MEDIA_COMPLETE:
      if (error) {
        return setPlaylistLoading(state, meta.playlistID, false);
      }

      return updatePlaylistAndItems(state, payload.playlistID, function (playlist) {
        return _objectSpread({}, playlist, {
          loading: false,
          size: payload.newSize
        });
      }, function (items) {
        return processInsert(items, payload.appendedMedia, {
          after: payload.afterID
        });
      });

    case DO_FAVORITE_COMPLETE:
      return updatePlaylistAndItems(state, payload.playlistID, function (playlist) {
        return _objectSpread({}, playlist, {
          size: payload.newSize
        });
      }, function (items) {
        return processInsert(items, payload.added, {
          at: 'end'
        });
      });

    case UPDATE_MEDIA_START:
      return updatePlaylistItems(state, payload.playlistID, function (items) {
        return items.map(function (media) {
          return media && media._id === payload.mediaID ? _objectSpread({}, media, {
            loading: true
          }) : media;
        });
      });

    case UPDATE_MEDIA_COMPLETE:
      return updatePlaylistItems(state, payload.playlistID, function (items) {
        return items.map(function (media) {
          return media && media._id === payload.mediaID ? _objectSpread({}, media, payload.media, {
            loading: false
          }) : media;
        });
      });

    case MOVE_MEDIA_START:
      {
        var isMovingMedia = indexBy(payload.medias, '_id');
        return updatePlaylistItems(state, payload.playlistID, function (items) {
          return items.map(function (media) {
            return media && _objectSpread({}, media, {
              loading: isMovingMedia[media._id] || media.loading
            });
          });
        });
      }

    case MOVE_MEDIA_COMPLETE:
      return updatePlaylistItems(state, payload.playlistID, function (items) {
        return processMove(items, payload.medias, payload.location);
      });

    case REMOVE_MEDIA_START:
      {
        var isRemovingMedia = indexBy(payload.medias, '_id');
        return updatePlaylistItems(state, payload.playlistID, function (items) {
          return items.map(function (media) {
            return media && _objectSpread({}, media, {
              loading: isRemovingMedia[media._id] || media.loading
            });
          });
        });
      }

    case REMOVE_MEDIA_COMPLETE:
      {
        var isRemovedMedia = indexBy(payload.removedMedia, '_id');
        return updatePlaylistAndItems(state, payload.playlistID, function (playlist) {
          return _objectSpread({}, playlist, {
            size: payload.newSize
          });
        }, function (items) {
          return items.filter(function (media) {
            return media === null || !isRemovedMedia[media._id];
          });
        });
      }

    default:
      return state;
  }
}
//# sourceMappingURL=playlists.js.map
