if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return !!str.match(/\d/);
    },

    containsRepeatingLetter : function(str) {
      return !!str.match(/([A-Za-z])\1/);
    },

    endsWithVowel : function(str) {
      return !!str.match(/[aeiou]$/i);
    },

    captureThreeNumbers : function(str) {
      return !!str.match(/[1-9]{3}/) ? str.match(/[1-9]{3}/)[0] : false;
    },

    matchesPattern : function(str) {
      return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },

    isUSD : function(str) {
      return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str)
    }
  };
});
