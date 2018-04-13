import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { LOAD_ALL_PLAYLISTS_START, LOAD_ALL_PLAYLISTS_COMPLETE, LOAD_PLAYLIST_START, LOAD_PLAYLIST_COMPLETE, FILTER_PLAYLIST_ITEMS, FILTER_PLAYLIST_ITEMS_START, FILTER_PLAYLIST_ITEMS_COMPLETE, PLAYLIST_CYCLED, SELECT_PLAYLIST, ACTIVATE_PLAYLIST_START, ACTIVATE_PLAYLIST_COMPLETE, CREATE_PLAYLIST_START, CREATE_PLAYLIST_COMPLETE, RENAME_PLAYLIST_START, RENAME_PLAYLIST_COMPLETE, DELETE_PLAYLIST_START, DELETE_PLAYLIST_COMPLETE, OPEN_ADD_MEDIA_MENU, CLOSE_ADD_MEDIA_MENU, ADD_MEDIA_START, ADD_MEDIA_COMPLETE, REMOVE_MEDIA_START, REMOVE_MEDIA_COMPLETE, MOVE_MEDIA_START, MOVE_MEDIA_COMPLETE, UPDATE_MEDIA_START, UPDATE_MEDIA_COMPLETE, SHUFFLE_PLAYLIST_START, SHUFFLE_PLAYLIST_COMPLETE } from '../constants/actionTypes/playlists';
import { openEditMediaDialog } from './DialogActionCreators';
import { del, get, post, put } from './RequestActionCreators';
import { playlistsSelector, playlistItemsSelector, playlistItemFilterSelector, activePlaylistIDSelector, selectedPlaylistIDSelector, activePlaylistSelector, selectedPlaylistSelector } from '../selectors/playlistSelectors';
import mergeIncludedModels from '../utils/mergeIncludedModels';
var MEDIA_PAGE_SIZE = 50;
export function setPlaylists(playlists) {
  return {
    type: LOAD_ALL_PLAYLISTS_COMPLETE,
    payload: {
      playlists: playlists
    }
  };
}
export function flattenPlaylistItem(item) {
  return _objectSpread({}, item.media, item);
}
export function loadPlaylistStart(playlistID, page, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$sneaky = _ref.sneaky,
      sneaky = _ref$sneaky === void 0 ? false : _ref$sneaky;

  return {
    type: LOAD_PLAYLIST_START,
    payload: {
      playlistID: playlistID
    },
    meta: {
      page: page,
      sneaky: sneaky
    }
  };
}
export function loadPlaylistComplete(playlistID, media, pagination) {
  return {
    type: LOAD_PLAYLIST_COMPLETE,
    payload: {
      playlistID: playlistID,
      media: media
    },
    meta: pagination
  };
}
export function loadPlaylist(playlistID, page, meta) {
  if (page === void 0) {
    page = 0;
  }

  if (meta === void 0) {
    meta = {};
  }

  return get("/playlists/" + playlistID + "/media", {
    qs: {
      page: page,
      limit: MEDIA_PAGE_SIZE
    },
    onStart: function onStart() {
      return loadPlaylistStart(playlistID, page, meta);
    },
    onComplete: function onComplete(res) {
      return loadPlaylistComplete(playlistID, mergeIncludedModels(res).map(flattenPlaylistItem), {
        page: res.meta.offset / res.meta.pageSize,
        pageSize: res.meta.pageSize,
        size: res.meta.total
      });
    },
    onError: function onError(error) {
      return {
        type: LOAD_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          page: page
        }
      };
    }
  });
}
export function filterPlaylistItemsStart(playlistID, page, filter) {
  return {
    type: FILTER_PLAYLIST_ITEMS_START,
    payload: {
      playlistID: playlistID,
      filter: filter
    },
    meta: {
      page: page
    }
  };
}
export function filterPlaylistItemsComplete(playlistID, media, pagination) {
  return {
    type: FILTER_PLAYLIST_ITEMS_COMPLETE,
    payload: {
      playlistID: playlistID,
      media: media
    },
    meta: pagination
  };
}
export function loadFilteredPlaylistItems(playlistID, page) {
  if (page === void 0) {
    page = 0;
  }

  return function (dispatch, getState) {
    var filter = playlistItemFilterSelector(getState()) || '';
    return dispatch(get("/playlists/" + playlistID + "/media", {
      qs: {
        filter: filter,
        page: page,
        limit: MEDIA_PAGE_SIZE
      },
      onStart: function onStart() {
        return filterPlaylistItemsStart(playlistID, page, filter);
      },
      onComplete: function onComplete(res) {
        return filterPlaylistItemsComplete(playlistID, mergeIncludedModels(res).map(flattenPlaylistItem), {
          page: res.meta.offset / res.meta.pageSize,
          pageSize: res.meta.pageSize,
          size: res.meta.results,
          filter: filter
        });
      },
      onError: function onError(error) {
        return {
          type: FILTER_PLAYLIST_ITEMS_COMPLETE,
          error: true,
          payload: error,
          meta: {
            page: page
          }
        };
      }
    }));
  };
}
export function filterPlaylistItems(playlistID, filter) {
  return function (dispatch) {
    dispatch({
      type: FILTER_PLAYLIST_ITEMS,
      payload: {
        playlistID: playlistID,
        filter: filter
      }
    });
    var loadAll = loadPlaylist(playlistID, 0);
    var loadFiltered = loadFilteredPlaylistItems(playlistID, 0);
    dispatch(filter === '' ? loadAll : loadFiltered);
  };
}
export function selectPlaylist(playlistID) {
  return function (dispatch) {
    dispatch({
      type: SELECT_PLAYLIST,
      payload: {
        playlistID: playlistID
      }
    });

    if (playlistID) {
      dispatch(loadPlaylist(playlistID));
    }
  };
}
export function playlistCycled(playlistID) {
  return {
    type: PLAYLIST_CYCLED,
    payload: {
      playlistID: playlistID
    }
  };
}

function shouldLoadAfterCycle(playlist) {
  var media = playlist.media; // If the playlist was fully loaded, we can cycle naively

  if (media.length === playlist.size && media.every(Boolean)) {
    return false;
  } // If the first page _after_ cycle is fully loaded, we also don't need to do
  // anything.


  if (media.length > MEDIA_PAGE_SIZE && media.slice(1, 1 + MEDIA_PAGE_SIZE).every(Boolean)) {
    return false;
  } // Otherwise, there will be unloaded items on the first page after cycling,
  // so we want to eagerly load the page again.


  return true;
}

export function cyclePlaylist(playlistID) {
  return function (dispatch, getState) {
    var activePlaylist = activePlaylistSelector(getState());
    var selectedPlaylist = selectedPlaylistSelector(getState());
    var playlist;

    if (playlistID === activePlaylist._id) {
      playlist = activePlaylist;
    } else if (playlistID === selectedPlaylist._id) {
      playlist = selectedPlaylist;
    }

    dispatch(playlistCycled(playlistID));

    if (playlist && shouldLoadAfterCycle(playlist)) {
      dispatch(loadPlaylist(playlistID, 0));
    }
  };
}
export function activatePlaylistStart(playlistID) {
  return {
    type: ACTIVATE_PLAYLIST_START,
    payload: {
      playlistID: playlistID
    }
  };
}
export function activatePlaylistComplete(playlistID) {
  return {
    type: ACTIVATE_PLAYLIST_COMPLETE,
    payload: {
      playlistID: playlistID
    }
  };
}
export function activatePlaylist(playlistID) {
  return put("/playlists/" + playlistID + "/activate", {}, {
    onStart: function onStart() {
      return activatePlaylistStart(playlistID);
    },
    onComplete: function onComplete() {
      return activatePlaylistComplete(playlistID);
    },
    onError: function onError(error) {
      return {
        type: ACTIVATE_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          playlistID: playlistID
        }
      };
    }
  });
}
export function loadPlaylistsStart() {
  return {
    type: LOAD_ALL_PLAYLISTS_START
  };
}
export function loadPlaylistsComplete(playlists) {
  return {
    type: LOAD_ALL_PLAYLISTS_COMPLETE,
    payload: {
      playlists: playlists
    }
  };
}
export function loadPlaylists() {
  return get('/playlists', {
    onStart: loadPlaylistsStart,
    onComplete: function onComplete(res) {
      return loadPlaylistsComplete(res.data);
    },
    onError: function onError(error) {
      return {
        type: LOAD_ALL_PLAYLISTS_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
export function createPlaylistStart(props, tempId) {
  return {
    type: CREATE_PLAYLIST_START,
    payload: props,
    meta: {
      tempId: tempId
    }
  };
}
export function createPlaylistComplete(playlist, tempId) {
  return {
    type: CREATE_PLAYLIST_COMPLETE,
    payload: {
      playlist: playlist
    },
    meta: {
      tempId: tempId
    }
  };
}
export function createPlaylist(name) {
  var tempId = -Date.now();
  var description = '';
  var shared = false;
  return post('/playlists', {
    name: name,
    description: description,
    shared: shared
  }, {
    onStart: function onStart() {
      return createPlaylistStart({
        name: name,
        description: description,
        shared: shared
      }, tempId);
    },
    onComplete: function onComplete(res) {
      return function (dispatch, getState) {
        var playlist = res.data;
        var isFirstPlaylist = !activePlaylistIDSelector(getState());
        dispatch(createPlaylistComplete(playlist, tempId));

        if (isFirstPlaylist) {
          dispatch(activatePlaylistComplete(playlist._id));
        }

        return playlist;
      };
    },
    onError: function onError(error) {
      return {
        type: CREATE_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          tempId: tempId
        }
      };
    }
  });
}
export function renamePlaylist(playlistID, name) {
  return put("/playlists/" + playlistID + "/rename", {
    name: name
  }, {
    onStart: function onStart() {
      return {
        type: RENAME_PLAYLIST_START,
        payload: {
          playlistID: playlistID,
          name: name
        }
      };
    },
    onComplete: function onComplete(_ref2) {
      var data = _ref2.data;
      return {
        type: RENAME_PLAYLIST_COMPLETE,
        payload: {
          playlistID: playlistID,
          name: data.name
        }
      };
    },
    onError: function onError(error) {
      return {
        type: RENAME_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          playlistID: playlistID,
          name: name
        }
      };
    }
  });
}
/**
 * Select or activate a different playlist than the one given.
 * @return Promise
 */

export function deselectPlaylist(playlistID) {
  return function (dispatch, getState) {
    var selectedID = selectedPlaylistIDSelector(getState());
    var activeID = activePlaylistIDSelector(getState());

    if (playlistID === selectedID) {
      dispatch(selectPlaylist(activeID));
    }
  };
}
export function deletePlaylistStart(playlistID) {
  return {
    type: DELETE_PLAYLIST_START,
    payload: {
      playlistID: playlistID
    }
  };
}
export function deletePlaylistComplete(playlistID) {
  return {
    type: DELETE_PLAYLIST_COMPLETE,
    payload: {
      playlistID: playlistID
    }
  };
}
export function cannotDeleteActivePlaylist(playlistID) {
  return {
    type: DELETE_PLAYLIST_COMPLETE,
    error: true,
    payload: new Error('The active playlist cannot be deleted. ' + 'Activate a different playlist first, before deleting this one.'),
    meta: {
      playlistID: playlistID
    }
  };
}
export function deletePlaylist(playlistID) {
  return function (dispatch, getState) {
    var activeID = activePlaylistIDSelector(getState());

    if (playlistID === activeID) {
      dispatch(cannotDeleteActivePlaylist(playlistID));
      return null;
    }

    dispatch(deselectPlaylist(playlistID));
    return dispatch(del("/playlists/" + playlistID, {}, {
      onStart: function onStart() {
        return deletePlaylistStart(playlistID);
      },
      onComplete: function onComplete() {
        return deletePlaylistComplete(playlistID);
      },
      onError: function onError(error) {
        return {
          type: DELETE_PLAYLIST_COMPLETE,
          error: true,
          payload: error,
          meta: {
            playlistID: playlistID
          }
        };
      }
    }));
  };
}
export function addMediaMenu(items, position) {
  return function (dispatch, getState) {
    var playlists = playlistsSelector(getState());
    dispatch({
      type: OPEN_ADD_MEDIA_MENU,
      payload: {
        media: items
      },
      meta: {
        playlists: playlists,
        position: position,
        type: 'add'
      }
    });
  };
}
export function closeAddMediaMenu() {
  return {
    type: CLOSE_ADD_MEDIA_MENU
  };
}
export function addMediaStart(playlistID, media, location) {
  return {
    type: ADD_MEDIA_START,
    payload: {
      playlistID: playlistID,
      media: media,
      location: location
    }
  };
}
export function addMediaComplete(playlistID, newSize, insert) {
  return {
    type: ADD_MEDIA_COMPLETE,
    payload: {
      playlistID: playlistID,
      newSize: newSize,
      afterID: insert.afterID,
      appendedMedia: insert.media
    }
  };
}
/**
 * Keep only the playlist item properties that are necessary to add an item to
 * a playlist. The rest ("thumbnail" etc) is left out for smaller payloads.
 */

function minimizePlaylistItem(item) {
  return {
    sourceType: item.sourceType,
    sourceID: item.sourceID,
    artist: item.artist,
    title: item.title,
    start: item.start,
    end: item.end
  };
}

export function addMedia(playlist, items, afterID) {
  if (afterID === void 0) {
    afterID = null;
  }

  var payload = {
    items: items.map(minimizePlaylistItem),
    after: afterID
  };
  return post("/playlists/" + playlist._id + "/media", payload, {
    onStart: function onStart() {
      return addMediaStart(playlist._id, items, afterID);
    },
    onComplete: function onComplete(res) {
      return addMediaComplete(playlist._id, res.meta.playlistSize, {
        afterID: afterID,
        media: mergeIncludedModels(res).map(flattenPlaylistItem)
      });
    },
    onError: function onError(error) {
      return {
        type: ADD_MEDIA_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
export function editMedia(playlistID, media) {
  return openEditMediaDialog(playlistID, media);
}
export function updateMediaStart(playlistID, mediaID, props) {
  return {
    type: UPDATE_MEDIA_START,
    payload: {
      playlistID: playlistID,
      mediaID: mediaID,
      props: props
    }
  };
}
export function updateMediaComplete(playlistID, mediaID, media) {
  return {
    type: UPDATE_MEDIA_COMPLETE,
    payload: {
      playlistID: playlistID,
      mediaID: mediaID,
      media: media
    }
  };
}
export function updateMedia(playlistID, mediaID, props) {
  return put("/playlists/" + playlistID + "/media/" + mediaID, props, {
    onStart: function onStart() {
      return updateMediaStart(playlistID, mediaID, props);
    },
    onComplete: function onComplete(res) {
      return updateMediaComplete(playlistID, mediaID, res.data);
    },
    onError: function onError(error) {
      return {
        type: UPDATE_MEDIA_COMPLETE,
        payload: error,
        error: true,
        meta: {
          playlistID: playlistID,
          mediaID: mediaID,
          props: props
        }
      };
    }
  });
}
export function removeMediaStart(playlistID, items) {
  return {
    type: REMOVE_MEDIA_START,
    payload: {
      playlistID: playlistID,
      medias: items
    }
  };
}
export function removeMediaComplete(playlistID, newSize, removedMedia) {
  return {
    type: REMOVE_MEDIA_COMPLETE,
    payload: {
      playlistID: playlistID,
      newSize: newSize,
      removedMedia: removedMedia
    }
  };
}
export function removeMedia(playlistID, items) {
  var itemIDs = items.map(function (media) {
    return media._id;
  });
  return del("/playlists/" + playlistID + "/media", {
    items: itemIDs
  }, {
    onStart: function onStart() {
      return removeMediaStart(playlistID, items);
    },
    onComplete: function onComplete(_ref3) {
      var meta = _ref3.meta;
      return removeMediaComplete(playlistID, meta.playlistSize, items);
    },
    onError: function onError(error) {
      return {
        type: REMOVE_MEDIA_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
export function moveMediaStart(playlistID, items, location) {
  return {
    type: MOVE_MEDIA_START,
    payload: {
      playlistID: playlistID,
      location: location,
      medias: items
    }
  };
}
export function moveMediaComplete(playlistID, items, location) {
  return {
    type: MOVE_MEDIA_COMPLETE,
    payload: {
      playlistID: playlistID,
      location: location,
      medias: items
    }
  };
}

function resolveMoveOptions(playlist, opts) {
  if (playlist === void 0) {
    playlist = [];
  }

  if (opts === void 0) {
    opts = {};
  }

  if (opts.after) {
    return {
      after: opts.after
    };
  }

  if (opts.before) {
    for (var i = 0, l = playlist.length; i < l; i += 1) {
      if (playlist[i] && playlist[i]._id === opts.before) {
        if (i === 0) {
          return {
            at: 'start'
          };
        }

        return {
          after: playlist[i - 1]._id
        };
      }
    }
  }

  if (opts.at) {
    return {
      at: opts.at
    };
  }

  return null;
}

export function moveMedia(playlistID, medias, opts) {
  return function (dispatch, getState) {
    var playlistItems = playlistItemsSelector(getState())[playlistID];
    var location = resolveMoveOptions(playlistItems, opts);
    var items = medias.map(function (media) {
      return media._id;
    });
    return dispatch(put("/playlists/" + playlistID + "/move", _objectSpread({
      items: items
    }, location), {
      onStart: function onStart() {
        return moveMediaStart(playlistID, medias, location);
      },
      onComplete: function onComplete() {
        return moveMediaComplete(playlistID, medias, location);
      },
      onError: function onError(error) {
        return {
          type: MOVE_MEDIA_COMPLETE,
          error: true,
          payload: error,
          meta: {
            playlistID: playlistID,
            medias: medias,
            location: location
          }
        };
      }
    }));
  };
}
export function shufflePlaylistStart(playlistID) {
  return {
    type: SHUFFLE_PLAYLIST_START,
    payload: {
      playlistID: playlistID
    }
  };
}
export function shufflePlaylistComplete(playlistID) {
  return function (dispatch) {
    dispatch({
      type: SHUFFLE_PLAYLIST_COMPLETE,
      payload: {
        playlistID: playlistID
      }
    });
  };
}
export function shufflePlaylist(playlistID) {
  return function (dispatch) {
    var shuffleOperation = post("/playlists/" + playlistID + "/shuffle", {}, {
      onStart: function onStart() {
        return shufflePlaylistStart(playlistID);
      },
      // onComplete: () => shufflePlaylistComplete(playlistID),
      onError: function onError(error) {
        return {
          type: SHUFFLE_PLAYLIST_COMPLETE,
          error: true,
          payload: error,
          meta: {
            playlistID: playlistID
          }
        };
      }
    });
    var loadOperation = loadPlaylist(playlistID, 0, {
      sneaky: true
    });
    return dispatch(shuffleOperation).then(function () {
      return dispatch(loadOperation);
    }).then(function () {
      return dispatch(shufflePlaylistComplete(playlistID));
    });
  };
}
//# sourceMappingURL=PlaylistActionCreators.js.map
