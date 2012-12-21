if (typeof define !== 'function') { var define = require('amdefine')(module); }

// Complete 2012.12.21

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (item === arr[i]){
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var total = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {
        var ret = [];
        for (var i = 0; i < arr.length; i++) {
            if (item !== arr[i]){
                ret.push(arr[i]);
            }
        }
        return ret;
    },
    
    removeWithoutCopy : function(arr, item) {
        var idxs = [];
        for (var i = 0; i < arr.length; i++) {
            if (item === arr[i]){
                idxs.push(i);
            }
        }
        for (i = idxs.length - 1; i >= 0; i--) {
            var idx = idxs[i];
            arr.splice(idx,1);
        }
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

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var ret = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (item === arr[i]){
                ret += 1;
            }
        }
        return ret;
    },

    duplicates : function(arr) {
        var seen = {};
        var dup = [];

        for (var i = 0; i < arr.length; i++) {
            seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
        }

        for (var item in seen) {
            if (seen.hasOwnProperty(item) && seen[item] > 1){
                dup.push(item);
            }
        }

        return dup;
    },

    square : function(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i]*arr[i];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var hit = [];
        for (var i = 0; i < arr.length; i++) {
            if (target === arr[i]){
                hit.push(i);
            }
        }
        return hit.length ? hit : -1;
    }
  };
});
