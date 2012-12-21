if (typeof define !== 'function') { var define = require('amdefine')(module); }

// Complete 2012.12.21

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var ret = [];
      for (var key in obj){
        if (obj.hasOwnProperty(key)){
          ret.push(key +": " + obj[key]);
        }
      }
      return ret;
    }
  };
});
