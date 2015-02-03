if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var dir = dirName || 'app';
      var start = [data];
      var files = [];
      start.forEach(function findDir(el) {
        if (el && el.dir && el.dir === dir){
          el.files.forEach(getFiles); return false;
        } else if (el.files) return el.files.forEach(findDir);
      });
      function getFiles(el) {
        if (typeof el === 'string') return files.push(el);
        else if (el.files) return el.files.forEach(getFiles);
      };

      return files;
    },

    permute: function(arr) {

      // copied entirely from answer and walked through
      var temp = [];
      var answer = [];

      return doIt(arr);

      function doIt(a) {
        var i, len, item;

        for (i = 0, len = arr.length; i < len; i++) {
          // remove the item at index i
          item = arr.splice(i, 1)[0];

          // add that item to the array we're building up
          temp.push(item);

          if (arr.length) {
            // if there's still anything left in the array,
            // recurse over what's left
            doIt(arr);
          } else {
            // otherwise, log the result and move on
            logResult();
          }

          // restore the item we removed at index i
          // and remove it from our temp array
          arr.splice(i, 0, item);
          temp.pop();
        }

        return answer;
      }

      function logResult() {
        answer.push(
          // make a copy of temp using .slice()
          // so we can continue to work with temp
          temp.slice()
        );
      }

    }
  };
});
