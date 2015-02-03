if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var str = num.toString(2);
      bit = str.length - bit;
      return parseInt(str.charAt(bit), 10);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      return (100000000 + parseInt(num.toString(2))).toString().substr(1);
    },

    multiply: function(a, b) {

    }
  };
});

