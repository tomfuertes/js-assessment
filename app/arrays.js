if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var ret = -1;
      arr.forEach(function(element, index){
        if (element === item) ret = index;
      });
      return ret;
    },

    sum : function(arr) {
      return arr.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
      }, 0);
    },

    remove : function(arr, item) {
      return arr.filter(function (el) {
        return (el !== item) ? el : undefined;
      });
    },

    removeWithoutCopy : function(arr, item) {
      while (arr.indexOf(item) !== -1)
        arr.splice(arr.indexOf(item), 1);
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      return arr.filter(function(index) {
        return arr[index] === item;
      }).length;
    },

    duplicates : function(arr) {
      var set = {};
      return arr.filter(function (index) {
        if (set[arr[index]] === undefined) set[arr[index]] = false;
        else if (set[arr[index]] === false) return (set[arr[index]] = true);
      });
    },

    square : function(arr) {
      return arr.map(function(element){
        return element * element;
      });
    },

    findAllOccurrences : function(arr, target) {
      return arr.map(function(el, i) {
        return el === target ? i : undefined;
      }).filter(function (el) {
        return el !== undefined;
      });
    }
  };
});
