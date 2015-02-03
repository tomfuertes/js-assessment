if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeout;
      (function count () {
        console.log(start);start++;
        if (start <= end) timeout = setTimeout(count, 100);
      })();
      return {
        cancel: function () {
          clearTimeout(timeout);
        }
      };
    }
  };
});
