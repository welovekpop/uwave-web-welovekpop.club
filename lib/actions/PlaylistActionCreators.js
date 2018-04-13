"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPlaylists = setPlaylists;
exports.flattenPlaylistItem = flattenPlaylistItem;
exports.loadPlaylistStart = loadPlaylistStart;
exports.loadPlaylistComplete = loadPlaylistComplete;
exports.loadPlaylist = loadPlaylist;
exports.filterPlaylistItemsStart = filterPlaylistItemsStart;
exports.filterPlaylistItemsComplete = filterPlaylistItemsComplete;
exports.loadFilteredPlaylistItems = loadFilteredPlaylistItems;
exports.filterPlaylistItems = filterPlaylistItems;
exports.selectPlaylist = selectPlaylist;
exports.playlistCycled = playlistCycled;
exports.cyclePlaylist = cyclePlaylist;
exports.activatePlaylistStart = activatePlaylistStart;
exports.activatePlaylistComplete = activatePlaylistComplete;
exports.activatePlaylist = activatePlaylist;
exports.loadPlaylistsStart = loadPlaylistsStart;
exports.loadPlaylistsComplete = loadPlaylistsComplete;
exports.loadPlaylists = loadPlaylists;
exports.createPlaylistStart = createPlaylistStart;
exports.createPlaylistComplete = createPlaylistComplete;
exports.createPlaylist = createPlaylist;
exports.renamePlaylist = renamePlaylist;
exports.deselectPlaylist = deselectPlaylist;
exports.deletePlaylistStart = deletePlaylistStart;
exports.deletePlaylistComplete = deletePlaylistComplete;
exports.cannotDeleteActivePlaylist = cannotDeleteActivePlaylist;
exports.deletePlaylist = deletePlaylist;
exports.addMediaMenu = addMediaMenu;
exports.closeAddMediaMenu = closeAddMediaMenu;
exports.addMediaStart = addMediaStart;
exports.addMediaComplete = addMediaComplete;
exports.addMedia = addMedia;
exports.editMedia = editMedia;
exports.updateMediaStart = updateMediaStart;
exports.updateMediaComplete = updateMediaComplete;
exports.updateMedia = updateMedia;
exports.removeMediaStart = removeMediaStart;
exports.removeMediaComplete = removeMediaComplete;
exports.removeMedia = removeMedia;
exports.moveMediaStart = moveMediaStart;
exports.moveMediaComplete = moveMediaComplete;
exports.moveMedia = moveMedia;
exports.shufflePlaylistStart = shufflePlaylistStart;
exports.shufflePlaylistComplete = shufflePlaylistComplete;
exports.shufflePlaylist = shufflePlaylist;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _playlists = require("../constants/actionTypes/playlists");

var _DialogActionCreators = require("./DialogActionCreators");

var _RequestActionCreators = require("./RequestActionCreators");

var _playlistSelectors = require("../selectors/playlistSelectors");

var _mergeIncludedModels = _interopRequireDefault(require("../utils/mergeIncludedModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MEDIA_PAGE_SIZE = 50;

function setPlaylists(playlists) {
  return {
    type: _playlists.LOAD_ALL_PLAYLISTS_COMPLETE,
    payload: {
      playlists: playlists
    }
  };
}

function flattenPlaylistItem(item) {
  return (0, _objectSpread2.default)({}, item.media, item);
}

function loadPlaylistStart(playlistID, page, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$sneaky = _ref.sneaky,
      sneaky = _ref$sneaky === void 0 ? false : _ref$sneaky;

  return {
    type: _playlists.LOAD_PLAYLIST_START,
    payload: {
      playlistID: playlistID
    },
    meta: {
      page: page,
      sneaky: sneaky
    }
  };
}

function loadPlaylistComplete(playlistID, media, pagination) {
  return {
    type: _playlists.LOAD_PLAYLIST_COMPLETE,
    payload: {
      playlistID: playlistID,
      media: media
    },
    meta: pagination
  };
}

function loadPlaylist(playlistID, page, meta) {
  if (page === void 0) {
    page = 0;
  }

  if (meta === void 0) {
    meta = {};
  }

  return (0, _RequestActionCreators.get)("/playlists/" + playlistID + "/media", {
    qs: {
      page: page,
      limit: MEDIA_PAGE_SIZE
    },
    onStart: function onStart() {
      return loadPlaylistStart(playlistID, page, meta);
    },
    onComplete: function onComplete(res) {
      return loadPlaylistComplete(playlistID, (0, _mergeIncludedModels.default)(res).map(flattenPlaylistItem), {
        page: res.meta.offset / res.meta.pageSize,
        pageSize: res.meta.pageSize,
        size: res.meta.total
      });
    },
    onError: function onError(error) {
      return {
        type: _playlists.LOAD_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          page: page
        }
      };
    }
  });
}

function filterPlaylistItemsStart(playlistID, page, filter) {
  return {
    type: _playlists.FILTER_PLAYLIST_ITEMS_START,
    payload: {
      playlistID: playlistID,
      filter: filter
    },
    meta: {
      page: page
    }
  };
}

function filterPlaylistItemsComplete(playlistID, media, pagination) {
  return {
    type: _playlists.FILTER_PLAYLIST_ITEMS_COMPLETE,
    payload: {
      playlistID: playlistID,
      media: media
    },
    meta: pagination
  };
}

function loadFilteredPlaylistItems(playlistID, page) {
  if (page === void 0) {
    page = 0;
  }

  return function (dispatch, getState) {
    var filter = (0, _playlistSelectors.playlistItemFilterSelector)(getState()) || '';
    return dispatch((0, _RequestActionCreators.get)("/playlists/" + playlistID + "/media", {
      qs: {
        filter: filter,
        page: page,
        limit: MEDIA_PAGE_SIZE
      },
      onStart: function onStart() {
        return filterPlaylistItemsStart(playlistID, page, filter);
      },
      onComplete: function onComplete(res) {
        return filterPlaylistItemsComplete(playlistID, (0, _mergeIncludedModels.default)(res).map(flattenPlaylistItem), {
          page: res.meta.offset / res.meta.pageSize,
          pageSize: res.meta.pageSize,
          size: res.meta.results,
          filter: filter
        });
      },
      onError: function onError(error) {
        return {
          type: _playlists.FILTER_PLAYLIST_ITEMS_COMPLETE,
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

function filterPlaylistItems(playlistID, filter) {
  return function (dispatch) {
    dispatch({
      type: _playlists.FILTER_PLAYLIST_ITEMS,
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

function selectPlaylist(playlistID) {
  return function (dispatch) {
    dispatch({
      type: _playlists.SELECT_PLAYLIST,
      payload: {
        playlistID: playlistID
      }
    });

    if (playlistID) {
      dispatch(loadPlaylist(playlistID));
    }
  };
}

function playlistCycled(playlistID) {
  return {
    type: _playlists.PLAYLIST_CYCLED,
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

function cyclePlaylist(playlistID) {
  return function (dispatch, getState) {
    var activePlaylist = (0, _playlistSelectors.activePlaylistSelector)(getState());
    var selectedPlaylist = (0, _playlistSelectors.selectedPlaylistSelector)(getState());
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

function activatePlaylistStart(playlistID) {
  return {
    type: _playlists.ACTIVATE_PLAYLIST_START,
    payload: {
      playlistID: playlistID
    }
  };
}

function activatePlaylistComplete(playlistID) {
  return {
    type: _playlists.ACTIVATE_PLAYLIST_COMPLETE,
    payload: {
      playlistID: playlistID
    }
  };
}

function activatePlaylist(playlistID) {
  return (0, _RequestActionCreators.put)("/playlists/" + playlistID + "/activate", {}, {
    onStart: function onStart() {
      return activatePlaylistStart(playlistID);
    },
    onComplete: function onComplete() {
      return activatePlaylistComplete(playlistID);
    },
    onError: function onError(error) {
      return {
        type: _playlists.ACTIVATE_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          playlistID: playlistID
        }
      };
    }
  });
}

function loadPlaylistsStart() {
  return {
    type: _playlists.LOAD_ALL_PLAYLISTS_START
  };
}

function loadPlaylistsComplete(playlists) {
  return {
    type: _playlists.LOAD_ALL_PLAYLISTS_COMPLETE,
    payload: {
      playlists: playlists
    }
  };
}

function loadPlaylists() {
  return (0, _RequestActionCreators.get)('/playlists', {
    onStart: loadPlaylistsStart,
    onComplete: function onComplete(res) {
      return loadPlaylistsComplete(res.data);
    },
    onError: function onError(error) {
      return {
        type: _playlists.LOAD_ALL_PLAYLISTS_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function createPlaylistStart(props, tempId) {
  return {
    type: _playlists.CREATE_PLAYLIST_START,
    payload: props,
    meta: {
      tempId: tempId
    }
  };
}

function createPlaylistComplete(playlist, tempId) {
  return {
    type: _playlists.CREATE_PLAYLIST_COMPLETE,
    payload: {
      playlist: playlist
    },
    meta: {
      tempId: tempId
    }
  };
}

function createPlaylist(name) {
  var tempId = -Date.now();
  var description = '';
  var shared = false;
  return (0, _RequestActionCreators.post)('/playlists', {
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
        var isFirstPlaylist = !(0, _playlistSelectors.activePlaylistIDSelector)(getState());
        dispatch(createPlaylistComplete(playlist, tempId));

        if (isFirstPlaylist) {
          dispatch(activatePlaylistComplete(playlist._id));
        }

        return playlist;
      };
    },
    onError: function onError(error) {
      return {
        type: _playlists.CREATE_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          tempId: tempId
        }
      };
    }
  });
}

function renamePlaylist(playlistID, name) {
  return (0, _RequestActionCreators.put)("/playlists/" + playlistID + "/rename", {
    name: name
  }, {
    onStart: function onStart() {
      return {
        type: _playlists.RENAME_PLAYLIST_START,
        payload: {
          playlistID: playlistID,
          name: name
        }
      };
    },
    onComplete: function onComplete(_ref2) {
      var data = _ref2.data;
      return {
        type: _playlists.RENAME_PLAYLIST_COMPLETE,
        payload: {
          playlistID: playlistID,
          name: data.name
        }
      };
    },
    onError: function onError(error) {
      return {
        type: _playlists.RENAME_PLAYLIST_COMPLETE,
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


function deselectPlaylist(playlistID) {
  return function (dispatch, getState) {
    var selectedID = (0, _playlistSelectors.selectedPlaylistIDSelector)(getState());
    var activeID = (0, _playlistSelectors.activePlaylistIDSelector)(getState());

    if (playlistID === selectedID) {
      dispatch(selectPlaylist(activeID));
    }
  };
}

function deletePlaylistStart(playlistID) {
  return {
    type: _playlists.DELETE_PLAYLIST_START,
    payload: {
      playlistID: playlistID
    }
  };
}

function deletePlaylistComplete(playlistID) {
  return {
    type: _playlists.DELETE_PLAYLIST_COMPLETE,
    payload: {
      playlistID: playlistID
    }
  };
}

function cannotDeleteActivePlaylist(playlistID) {
  return {
    type: _playlists.DELETE_PLAYLIST_COMPLETE,
    error: true,
    payload: new Error('The active playlist cannot be deleted. ' + 'Activate a different playlist first, before deleting this one.'),
    meta: {
      playlistID: playlistID
    }
  };
}

function deletePlaylist(playlistID) {
  return function (dispatch, getState) {
    var activeID = (0, _playlistSelectors.activePlaylistIDSelector)(getState());

    if (playlistID === activeID) {
      dispatch(cannotDeleteActivePlaylist(playlistID));
      return null;
    }

    dispatch(deselectPlaylist(playlistID));
    return dispatch((0, _RequestActionCreators.del)("/playlists/" + playlistID, {}, {
      onStart: function onStart() {
        return deletePlaylistStart(playlistID);
      },
      onComplete: function onComplete() {
        return deletePlaylistComplete(playlistID);
      },
      onError: function onError(error) {
        return {
          type: _playlists.DELETE_PLAYLIST_COMPLETE,
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

function addMediaMenu(items, position) {
  return function (dispatch, getState) {
    var playlists = (0, _playlistSelectors.playlistsSelector)(getState());
    dispatch({
      type: _playlists.OPEN_ADD_MEDIA_MENU,
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

function closeAddMediaMenu() {
  return {
    type: _playlists.CLOSE_ADD_MEDIA_MENU
  };
}

function addMediaStart(playlistID, media, location) {
  return {
    type: _playlists.ADD_MEDIA_START,
    payload: {
      playlistID: playlistID,
      media: media,
      location: location
    }
  };
}

function addMediaComplete(playlistID, newSize, insert) {
  return {
    type: _playlists.ADD_MEDIA_COMPLETE,
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

function addMedia(playlist, items, afterID) {
  if (afterID === void 0) {
    afterID = null;
  }

  var payload = {
    items: items.map(minimizePlaylistItem),
    after: afterID
  };
  return (0, _RequestActionCreators.post)("/playlists/" + playlist._id + "/media", payload, {
    onStart: function onStart() {
      return addMediaStart(playlist._id, items, afterID);
    },
    onComplete: function onComplete(res) {
      return addMediaComplete(playlist._id, res.meta.playlistSize, {
        afterID: afterID,
        media: (0, _mergeIncludedModels.default)(res).map(flattenPlaylistItem)
      });
    },
    onError: function onError(error) {
      return {
        type: _playlists.ADD_MEDIA_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function editMedia(playlistID, media) {
  return (0, _DialogActionCreators.openEditMediaDialog)(playlistID, media);
}

function updateMediaStart(playlistID, mediaID, props) {
  return {
    type: _playlists.UPDATE_MEDIA_START,
    payload: {
      playlistID: playlistID,
      mediaID: mediaID,
      props: props
    }
  };
}

function updateMediaComplete(playlistID, mediaID, media) {
  return {
    type: _playlists.UPDATE_MEDIA_COMPLETE,
    payload: {
      playlistID: playlistID,
      mediaID: mediaID,
      media: media
    }
  };
}

function updateMedia(playlistID, mediaID, props) {
  return (0, _RequestActionCreators.put)("/playlists/" + playlistID + "/media/" + mediaID, props, {
    onStart: function onStart() {
      return updateMediaStart(playlistID, mediaID, props);
    },
    onComplete: function onComplete(res) {
      return updateMediaComplete(playlistID, mediaID, res.data);
    },
    onError: function onError(error) {
      return {
        type: _playlists.UPDATE_MEDIA_COMPLETE,
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

function removeMediaStart(playlistID, items) {
  return {
    type: _playlists.REMOVE_MEDIA_START,
    payload: {
      playlistID: playlistID,
      medias: items
    }
  };
}

function removeMediaComplete(playlistID, newSize, removedMedia) {
  return {
    type: _playlists.REMOVE_MEDIA_COMPLETE,
    payload: {
      playlistID: playlistID,
      newSize: newSize,
      removedMedia: removedMedia
    }
  };
}

function removeMedia(playlistID, items) {
  var itemIDs = items.map(function (media) {
    return media._id;
  });
  return (0, _RequestActionCreators.del)("/playlists/" + playlistID + "/media", {
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
        type: _playlists.REMOVE_MEDIA_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function moveMediaStart(playlistID, items, location) {
  return {
    type: _playlists.MOVE_MEDIA_START,
    payload: {
      playlistID: playlistID,
      location: location,
      medias: items
    }
  };
}

function moveMediaComplete(playlistID, items, location) {
  return {
    type: _playlists.MOVE_MEDIA_COMPLETE,
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

function moveMedia(playlistID, medias, opts) {
  return function (dispatch, getState) {
    var playlistItems = (0, _playlistSelectors.playlistItemsSelector)(getState())[playlistID];
    var location = resolveMoveOptions(playlistItems, opts);
    var items = medias.map(function (media) {
      return media._id;
    });
    return dispatch((0, _RequestActionCreators.put)("/playlists/" + playlistID + "/move", (0, _objectSpread2.default)({
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
          type: _playlists.MOVE_MEDIA_COMPLETE,
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

function shufflePlaylistStart(playlistID) {
  return {
    type: _playlists.SHUFFLE_PLAYLIST_START,
    payload: {
      playlistID: playlistID
    }
  };
}

function shufflePlaylistComplete(playlistID) {
  return function (dispatch) {
    dispatch({
      type: _playlists.SHUFFLE_PLAYLIST_COMPLETE,
      payload: {
        playlistID: playlistID
      }
    });
  };
}

function shufflePlaylist(playlistID) {
  return function (dispatch) {
    var shuffleOperation = (0, _RequestActionCreators.post)("/playlists/" + playlistID + "/shuffle", {}, {
      onStart: function onStart() {
        return shufflePlaylistStart(playlistID);
      },
      // onComplete: () => shufflePlaylistComplete(playlistID),
      onError: function onError(error) {
        return {
          type: _playlists.SHUFFLE_PLAYLIST_COMPLETE,
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
} //# sourceMappingURL=PlaylistActionCreators.js.map
//# sourceMappingURL=PlaylistActionCreators.js.map
