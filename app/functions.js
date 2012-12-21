if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(fn,arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (arg) {return str + ", " + arg;};
    },

    makeClosures : function(arr, fn) {
        var ret = [];
        var makeFunction = function (val){
            return function () {return fn(val);};
        };
        for (var i = 0; i < arr.length; i++) {
            ret.push(makeFunction(arr[i]));
        }
        return ret;
    },

    partial : function(fn, str1, str2) {
        return function (arg) {
            return fn.call(null, str1, str2, arg);
        };
    },

    useArguments : function() {
        var ret = 0;
        for (var i = 0; i < arguments.length; i++) {
             ret += arguments[i];
         }
        return ret;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, args);
    },

    curryIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() {
        var moreArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, moreArgs);
      };

    }
  };
});
