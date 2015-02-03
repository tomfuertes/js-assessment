if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var dfd = $.Deferred();
      setTimeout(function () {
        dfd.resolve(value);
      }, 1);
      return dfd.promise();
    },

    manipulateRemoteData : function(url) {
      return $.get(url).then(function (results) {
        return results.people.map(function (el) {return el.name;}).sort();
      });
    }
  };
});
