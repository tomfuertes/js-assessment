if (typeof define !== 'function') { var define = require('amdefine')(module); }

// Complete 2012.12.21

define(function() {
  return {
    createModule : function(str1, str2) {
      // var saying = str1;
      // var name = str2;

      return {
        sayIt: function (){
          return this.greeting + ", " + this.name;
        },
        name: str2,
        greeting: str1
      };

    }
  };
});

