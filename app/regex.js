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
        var match = str.match(/(\d{3})/);
        if (match) {
            return match[0];
        }
        return false;
    },

    matchesPattern : function(str) {
        return !!str.match(/^\d{3}-\d{3}-\d{4}$/);
    },

    isUSD : function(str) {
        return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
    }
  };
});
