if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function (str2) {
        return str + ', ' + str2;
      }
    },

    makeClosures : function(arr, fn) {
      return arr.map(function (el) {
        return function () {
          return fn(el);
        };
      });
    },

    partial : function(fn, str1, str2) {
      return fn.bind(null, str1, str2);
    },

    useArguments : function() {
      return [].slice.call(arguments, 0).reduce(function (prev,curr) {
        return prev+curr;
      }, 0);
    },

    callIt : function(fn) {
      var args = [].slice.call(arguments, 1);
      fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var args = [].slice.call(arguments, 1);
      return function () {
        var args2 = [].slice.call(arguments, 0);
        return fn.apply(null, args.concat(args2));
      };
    },

    curryIt : function(fn) {
      var args = [].slice.call(arguments, 1);
      return function poll(q) {
        args.push(q);
        if (args.length === 3 ) return fn.apply(null, args);
        return poll;
      };
    }
  };
});
