"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _objectAssign = _interopRequireDefault(require("object-assign"));

var _except = _interopRequireDefault(require("except"));

var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));

var _arrayFindindex = _interopRequireDefault(require("array-findindex"));

var _indexBy = _interopRequireDefault(require("index-by"));

var _object = _interopRequireDefault(require("object.map"));

var _playlists = require("../constants/actionTypes/playlists");

var _votes = require("../constants/actionTypes/votes");

var _search = require("../constants/actionTypes/search");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  playlists: {},
  playlistItems: {},
  activePlaylistID: null,
  selectedPlaylistID: null,
  currentFilter: {}
};

function deselectAll(playlists) {
  return (0, _object.default)(playlists, function (playlist) {
    return playlist.selected ? (0, _objectSpread4.default)({}, playlist, {
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
    insertIdx = (0, _arrayFindindex.default)(list, function (media) {
      return media !== null && media._id === position.after;
    }) + 1;
  }

  return list.slice(0, insertIdx).concat(insert, list.slice(insertIdx));
} // Moves a list of media items to a given position in the playlist.


function processMove(list, movedMedia, location) {
  // Take all moved media items out of the playlist…
  var wasMoved = (0, _indexBy.default)(movedMedia, '_id');
  var newPlaylist = list.filter(function (media) {
    return media === null || !wasMoved[media._id];
  }); // …and add them back in at the correct place.

  return processInsert(newPlaylist, movedMedia, location);
}

function updatePlaylist(state, playlistID, modify) {
  var playlist = state.playlists[playlistID];

  if (playlist) {
    var _objectSpread2;

    return (0, _objectSpread4.default)({}, state, {
      playlists: (0, _objectSpread4.default)({}, state.playlists, (_objectSpread2 = {}, _objectSpread2[playlistID] = modify(playlist), _objectSpread2))
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
      nextFilter = (0, _objectSpread4.default)({}, nextFilter, {
        items: modify(nextFilter.items || [], playlist)
      });
    }

    return (0, _objectSpread4.default)({}, state, {
      playlistItems: (0, _objectSpread4.default)({}, state.playlistItems, (_objectSpread3 = {}, _objectSpread3[playlistID] = modify(media || [], playlist), _objectSpread3)),
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
    return (0, _objectSpread4.default)({}, playlist, {
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
  var rx = new RegExp((0, _escapeStringRegexp.default)(filter), 'i');
  var playlist = state.playlistItems[playlistID];

  if (playlist) {
    return playlist.filter(function (item) {
      return item && (rx.test(item.artist) || rx.test(item.title));
    });
  }

  return [];
}

function reduce(state, action) {
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
    case _playlists.LOAD_ALL_PLAYLISTS_COMPLETE:
      return (0, _objectSpread4.default)({}, state, {
        playlists: (0, _indexBy.default)(payload.playlists, '_id')
      });

    case _playlists.ACTIVATE_PLAYLIST_START:
      // TODO use a different property here so we can show a loading icon on
      // the "Active" button only, instead of on top of the entire playlist
      return setPlaylistLoading(state, payload.playlistID);

    case _playlists.ACTIVATE_PLAYLIST_COMPLETE:
      if (error) {
        return setPlaylistLoading(state, meta.playlistID, false);
      }

      return (0, _objectSpread4.default)({}, state, {
        // set `active` property on all playlists
        playlists: (0, _object.default)(state.playlists, function (playlist) {
          return (0, _objectSpread4.default)({}, playlist, {
            loading: playlist._id === payload.playlistID ? false : playlist.loading,
            active: playlist._id === payload.playlistID
          });
        }),
        activePlaylistID: payload.playlistID
      });

    case _playlists.SELECT_PLAYLIST:
      return (0, _objectSpread4.default)({}, state, {
        // set `selected` property on playlists
        playlists: (0, _object.default)(state.playlists, function (playlist) {
          return (0, _objectSpread4.default)({}, playlist, {
            selected: playlist._id === payload.playlistID
          });
        }),
        selectedPlaylistID: payload.playlistID
      });

    case _search.SEARCH_START:
      // We deselect playlists when doing a search, so the UI can switch to the
      // search results view instead.
      return (0, _objectSpread4.default)({}, state, {
        playlists: deselectAll(state.playlists),
        selectedPlaylistID: null
      });

    case _search.SEARCH_DELETE:
      // Select the active playlist when search results are closed while they
      // were focused.
      if (state.selectedPlaylistID) return state;
      return (0, _objectSpread4.default)({}, state, {
        playlists: (0, _object.default)(state.playlists, function (playlist) {
          return (0, _objectSpread4.default)({}, playlist, {
            selected: playlist.active
          });
        }),
        selectedPlaylistID: state.activePlaylistID
      });

    case _playlists.LOAD_PLAYLIST_START:
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

    case _playlists.LOAD_PLAYLIST_COMPLETE:
      if (error) {
        return setPlaylistLoading(state, meta.playlistID, false);
      }

      return updatePlaylistAndItems(state, payload.playlistID, function (playlist) {
        return (0, _objectSpread4.default)({}, playlist, {
          loading: false
        });
      }, function (items) {
        return mergePlaylistPage(meta.size, items, payload.media, meta);
      });

    case _playlists.FILTER_PLAYLIST_ITEMS:
      // Only the selected playlist can be filtered.
      if (payload.playlistID !== state.selectedPlaylistID) {
        return state;
      }

      if (!payload.filter) {
        return (0, _objectSpread4.default)({}, state, {
          currentFilter: null
        });
      }

      return (0, _objectSpread4.default)({}, state, {
        currentFilter: {
          playlistID: payload.playlistID,
          filter: payload.filter,
          items: filterCachedPlaylistItems(state, payload.playlistID, payload.filter)
        }
      });

    case _playlists.FILTER_PLAYLIST_ITEMS_COMPLETE:
      {
        // Only the selected playlist can be filtered.
        if (payload.playlistID !== state.selectedPlaylistID) {
          return state;
        }

        var _state = state,
            currentFilter = _state.currentFilter;
        var items = mergePlaylistPage(meta.size, currentFilter.items, payload.media, meta);
        return (0, _objectSpread4.default)({}, state, {
          currentFilter: (0, _objectSpread4.default)({}, currentFilter, {
            items: items
          })
        });
      }

    case _playlists.PLAYLIST_CYCLED:
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

    case _playlists.CREATE_PLAYLIST_START:
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
        return (0, _objectSpread4.default)({}, state, {
          playlists: (0, _objectAssign.default)(deselectAll(state.playlists), (_assign = {}, _assign[meta.tempId] = newPlaylist, _assign)),
          selectedPlaylistID: meta.tempId
        });
      }

    case _playlists.CREATE_PLAYLIST_COMPLETE:
      if (error) {
        return (0, _objectSpread4.default)({}, state, {
          playlists: (0, _except.default)(state.playlists, "" + meta.tempId)
        });
      }

      return (0, _objectSpread4.default)({}, state, {
        playlists: (0, _objectAssign.default)(deselectAll((0, _except.default)(state.playlists, "" + meta.tempId)), (_assign2 = {}, _assign2[payload.playlist._id] = (0, _objectSpread4.default)({}, payload.playlist, {
          selected: true
        }), _assign2)),
        selectedPlaylistID: payload.playlist._id
      });

    case _playlists.RENAME_PLAYLIST_START:
      return setPlaylistLoading(state, payload.playlistID);

    case _playlists.RENAME_PLAYLIST_COMPLETE:
      {
        if (error) {
          return setPlaylistLoading(state, meta.playlistID, false);
        }

        var renamedPlaylist = state.playlists[payload.playlistID];

        if (renamedPlaylist) {
          return updatePlaylist(state, payload.playlistID, function (playlist) {
            return (0, _objectSpread4.default)({}, playlist, {
              name: payload.name,
              loading: false
            });
          });
        }

        return state;
      }

    case _playlists.DELETE_PLAYLIST_START:
      return setPlaylistLoading(state, payload.playlistID);

    case _playlists.DELETE_PLAYLIST_COMPLETE:
      if (error) {
        return setPlaylistLoading(state, meta.playlistID, false);
      }

      return (0, _objectSpread4.default)({}, state, {
        // When deleting the selected playlist, select the active playlist instead.
        selectedPlaylistID: state.selectedPlaylistID === payload.playlistID ? state.activePlaylistID : state.selectedPlaylistID,
        playlists: (0, _except.default)(state.playlists, payload.playlistID)
      });

    case _playlists.ADD_MEDIA_START:
      return setPlaylistLoading(state, payload.playlistID);

    case _playlists.ADD_MEDIA_COMPLETE:
      if (error) {
        return setPlaylistLoading(state, meta.playlistID, false);
      }

      return updatePlaylistAndItems(state, payload.playlistID, function (playlist) {
        return (0, _objectSpread4.default)({}, playlist, {
          loading: false,
          size: payload.newSize
        });
      }, function (items) {
        return processInsert(items, payload.appendedMedia, {
          after: payload.afterID
        });
      });

    case _votes.DO_FAVORITE_COMPLETE:
      return updatePlaylistAndItems(state, payload.playlistID, function (playlist) {
        return (0, _objectSpread4.default)({}, playlist, {
          size: payload.newSize
        });
      }, function (items) {
        return processInsert(items, payload.added, {
          at: 'end'
        });
      });

    case _playlists.UPDATE_MEDIA_START:
      return updatePlaylistItems(state, payload.playlistID, function (items) {
        return items.map(function (media) {
          return media && media._id === payload.mediaID ? (0, _objectSpread4.default)({}, media, {
            loading: true
          }) : media;
        });
      });

    case _playlists.UPDATE_MEDIA_COMPLETE:
      return updatePlaylistItems(state, payload.playlistID, function (items) {
        return items.map(function (media) {
          return media && media._id === payload.mediaID ? (0, _objectSpread4.default)({}, media, payload.media, {
            loading: false
          }) : media;
        });
      });

    case _playlists.MOVE_MEDIA_START:
      {
        var isMovingMedia = (0, _indexBy.default)(payload.medias, '_id');
        return updatePlaylistItems(state, payload.playlistID, function (items) {
          return items.map(function (media) {
            return media && (0, _objectSpread4.default)({}, media, {
              loading: isMovingMedia[media._id] || media.loading
            });
          });
        });
      }

    case _playlists.MOVE_MEDIA_COMPLETE:
      return updatePlaylistItems(state, payload.playlistID, function (items) {
        return processMove(items, payload.medias, payload.location);
      });

    case _playlists.REMOVE_MEDIA_START:
      {
        var isRemovingMedia = (0, _indexBy.default)(payload.medias, '_id');
        return updatePlaylistItems(state, payload.playlistID, function (items) {
          return items.map(function (media) {
            return media && (0, _objectSpread4.default)({}, media, {
              loading: isRemovingMedia[media._id] || media.loading
            });
          });
        });
      }

    case _playlists.REMOVE_MEDIA_COMPLETE:
      {
        var isRemovedMedia = (0, _indexBy.default)(payload.removedMedia, '_id');
        return updatePlaylistAndItems(state, payload.playlistID, function (playlist) {
          return (0, _objectSpread4.default)({}, playlist, {
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
} //# sourceMappingURL=playlists.js.map
//# sourceMappingURL=playlists.js.map
