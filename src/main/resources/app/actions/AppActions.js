var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var RouteUtils = require('../utils/RouteUtils');

var ActionTypes = AppConstants.ActionTypes;

var AppActions = {

  initialize: function(bootstrap) {
    if (!bootstrap) bootstrap = {};
    var path = RouteUtils.getBestAvailablePath(bootstrap);
    var page = RouteUtils.getPage(path);
    var action = {
      type: ActionTypes.APP_INITIALIZE,
      path: path,
      page: page
    };
    AppDispatcher.dispatch(action);
  },

  reset: function() {
    AppDispatcher.dispatch({
      type: ActionTypes.APP_RESET
    });
  },

  navigateSwitchPage: function(path, page) {
    var action = {
      type: ActionTypes.SWITCH_PAGE,
      page: page,
      path: path
    };
    AppDispatcher.dispatch(action);
  },

  popStateSwitchPage: function(path) {
    var page = RouteUtils.getPage(path);
    var action = {
      type: ActionTypes.SWITCH_PAGE,
      page: page,
      path: path
    };
    AppDispatcher.dispatch(action);
  }
};

module.exports = AppActions;
