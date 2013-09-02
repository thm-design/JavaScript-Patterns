// =======================================================================================
// An anonymous function, executed immediately.
// ======================================================================================= 

(function() {
  var foo = 10;
  var bar = 2;
  alert(foo * bar);
})();


// An anonymous function with arguments. 

(function(foo, bar) {
  alert(foo * bar);
})(10, 2);


// An anonymous function that returns a value.

var baz = (function(foo, bar) {
  return foo * bar;
})(10, 2);

// baz will equal 20.


// An anonymous function used as a closure. 

var baz;

(function() {
  var foo = 10;
  var bar = 2;
  baz = function() { 
    return foo * bar; 
  };
})();

baz(); // baz can access foo and bar, even though is it executed outside of the anonymous function.


// =======================================================================================
// Class Patterns. 
// ======================================================================================= 


// Animation  class
// ========================================================================== 

var Anim = function() {
  ...
};
Anim.prototype.start = function() {
  ...
};
Anim.prototype.stop = function() {
  ...
};

/* Usage. */

var myAnim = new Anim();
myAnim.start();
...
myAnim.stop();



// Animation class, with a slightly different syntax for declaring methods. 
// ========================================================================== 

var Anim = function() { 
  ...
};
Anim.prototype = {
  start: function() {
    ...
  },
  stop: function() {
    ...
  }
};



// Add a method to the Function class that can be used to declare methods.
// ==========================================================================  

Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn;
};

/* Anim class, with methods created using a convenience method. */

var Anim = function() { 
  ...
};
Anim.method('start', function() {
  ...
});
Anim.method('stop', function() {
  ...
});



// This version allows the calls to be chained. 

Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};

// Anim class, with methods created using a convenience method and chaining. 

var Anim = function() { 
  ...
};
Anim.
  method('start', function() {
    ...
  }).
  method('stop', function() {
    ...
  });



// Class example, Person
// ==========================================================================  

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = {
  getName: function() {
    return this.name;
  },
  getAge: function() {
    return this.age;
  }
}

// Instantiate the class. 

var alice = new Person('Alice', 93);
var bill = new Person('Bill', 30);

// Modify the class. 

Person.prototype.getGreeting = function() {
  return 'Hi ' + this.getName() + '!';
};

// Modify a specific instance. 

alice.displayGreeting = function() {
  alert(this.getGreeting());
}

// =======================================================================================
// Conditional Patterns. 
// ======================================================================================= 

// normal pattern
      if (type === 'foo' || type === 'bar') {
      }


      // alternative method 1 - regex test
      if (/^(foo|bar)$/.test(type)) {
      }


      // alternative method 2 - object literal lookup (smaller if < 5 items)
      if (({foo:1, bar:1})[type]) {
      }


      /* alternative method 3 - binary-search-like approach
       * This approach is best when there are ranges of values for which to test
       */
      if (value == 0) {
        return result0;
      } else if (value == 1) {
        return result1;
      } else if (value == 2) {
        return result2;
      } else if (value == 3) {
        return result3;
      } else if (value == 4) {
        return result4;
      } else if (value == 5) {
        return result5;
      } else if (value == 6) {
        return result6;
      } else if (value == 7) {
        return result7;
      } else if (value == 8) {
        return result8;
      } else if (value == 9) {
        return result9;
      } else {
        return result10;
      }

      if (value < 6) {
        if (value < 3) {
          if (value == 0) {
            return result0;
          } else if (value == 1) {
            return result1;
          } else {
            return result2;
          }
        } else {
          if (value == 3) {
            return result3;
          } else if (value == 4) {
            return result4;
          } else {
            return result5;
          }
        }
      } else {
        if (value < 8) {
          if (value == 6) {
            return result6;
          } else {
            return result7;
          }
        } else {
          if (value == 8) {
            return result8;
          } else if (value == 9) {
            return result9;
          } else {
            return result10;
          }
        }
      }


      /* alternative method 4 - object/array lookup tables
       * Most useful when there is logical mapping between a single key and a single value
       */
      if (value == 0) {
        return result0;
      } else if (value == 1) {
        return result1;
      } else if (value == 2) {
        return result2;
      }

      // define the array of results
      var results = [result0, result1, result2];
      // return the correct result
      return results[value];


      /* alternative method 5 - only using logical operators
       * Shorter way to use simple statements
       */
      var 
        type = 'foo',
        type2 = 'bar',
        result = 0;

      type == 'foo' && result++;
      console.log(result); // 1
      !type == 'foo' || result++;
      console.log(result); // 2
      type == 'foo' && type2 == 'bar' && result++;
      console.log(result); //3
      type == 'foo' && type2 == 'bar' && result == 3 && (result=0); //parentheses avoid "invalid assignment left-hand side" error
      console.log(result); //0
      type == 'OOF' || result++; //equivalent: type != 'OOF' && result++;
      console.log(result); //1      


// =======================================================================================
// Loop patterns. 
// ======================================================================================= 

      // sub-optimal loop
      for (var i = 0; i < myarray.length; i++) {
        // do something with myarray[i]
      }

      // optimization 1 - cache the length of the array with the use of `max`
      for (var i = 0, max = myarray.length; i < max; i++) {
        // do something with myarray[i]
      }


      // optimization 2 - use single var pattern for consistency
      // NOTE: A drawback is that it makes it a little harder to copy and paste whole loops while refactoring code.
      var i = 0,
          max,
          myarray = [];

      for (i = 0, max = myarray.length; i < max; i++) {
        // do something with myarray[i]
      }


      // optimization 3 - substitute `i++` with `i = i + 1`  or `i += 1` to avoid excessive trickiness
      var i = 0,
          max,
          myarray = [];

      for (i = 0, max = myarray.length; i < max; i += 1) {
        // do something with myarray[i]
      }


      // preferred 1
      var i, myarray = [];
      for (i = myarray.length; i--;) {
        // do something with myarray[i]
      }


      // preferred 2
      var myarray = [],
          i = myarray.length;
      while (i--) {
        // do something with myarray[i]
      }


// for in loop patterns. 
// ======================================================================================= 

// the object
      var man = {
        hands:2,
        legs:2,
        heads:1
      };

      // somewhere else in the code
      // a method was added to all objects
      if (typeof Object.prototype.clone === 'undefined') {
        Object.prototype.clone = function () {
        };
      }


      // antipattern
      // for-in loop without checking hasOwnProperty()
      for (var i in man) {
        console.log(i, ":", man[i]);
      }
      /*
       * result in the console
       * hands : 2
       * legs : 2
       * heads : 1
       * clone: function()
       */


      // preferred 1
      for (var i in man) {
        if (man.hasOwnProperty(i)) { // filter
          console.log(i, ":", man[i]);
        }
      }

      /*
       * result in the console
       * hands : 2
       * legs : 2
       * heads : 1
       */


      // preferred 2
      // benefit is you can avoid naming collisions is case the `man` object has redefined `hasOwnProperty`
      for (var i in man) {
        if (Object.prototype.hasOwnProperty.call(man, i)) { // filter
          console.log(i, ":", man[i]);
        }
      }


      // preferred 3
      // use a local variable to "cache" `Object.prototype.hasOwnProperty`
      var i,
          hasOwn = Object.prototype.hasOwnProperty;
      for (i in man) {
        if (hasOwn.call(man, i)) { // filter
          console.log(i, ":", man[i]);
        }
      }

// =======================================================================================
// Switch pattern. 
// ======================================================================================= 


      var inspect_me = 0,
          result = '';
      switch (inspect_me) {
        case 0:
          result = "zero";
          break;
        case 1:
          result = "one";
          break;
        default:
          result = "unknown";
      }
// ======================================================================================= 
// Module pattern.
// ======================================================================================= 
var app;
 
app = (function(){
  
  var myPrivateVariable = "my private content";
  
  var application = {
    init: function(){
      console.log(myPrivateVariable);
    },
    cache: function() {
      // impl
    },
    bind: function() {
      // impl
    },
    blabla: function(){
      // ....
    }
  }
  
  return application;
  
})();
 
app.init(); // > my private content
app.myPrivateVariable // > undefined

//================================================

var s,
    Mod1 = {
        settings: {
            message: "Module 1's settings"
        },
        init: function() {
            s = this.settings;
            $("#button1").on("click", function() {
                alert(s.message);
            });
        }
    };
Mod1.init();


// ======================================================================================= 
// jQuery Boilerplate
// ======================================================================================= 

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "defaultPluginName",
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.options
            // you can add more functions like the one below and
            // call them like so: this.yourOtherFunction(this.element, this.options).
        },

        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

//usage

$('#elem').defaultPluginName({
  propertyName: 'a custom value'
});


/*--------------------------------------------------------------------------
 * ModulePattern Bootstrap
 *
 * Created      : 21/01/2013
 * Version      : 1.0
 * UI Developer : Guilherme Pontes
 * Notes        : Copy and reproduce as much as you want.
---------------------------------------------------------------------------*/

var sampleApplication;

sampleApplication = window.sampleApplication || (function(d, w, $, u){
  "use strict";

  var app, config;


  //private content
  config = {
    div : {
      background: "red"
    }
  };

  app = {
    init : function() {
      this.log("Initializing project");
      this._cache();
      this._bind();
    },

    load: function() {
      this.log("Load event triggered");
      this.loadMe();
    },

    _cache : function() {
      this.log("Caching elements");
      this.$anchorPrevent   = $( "a[href='#']" );
      this.$myDiv           = $( ".myDiv" );
    },

    _bind : function() {
      this.log("Binding functions");
      this.$anchorPrevent.on( 'click', this.prevent );
      this.$myDiv.on( 'click', this.changeBackground );
    },

    prevent : function(e) {
      // here we need to avoid the "this" keyword, because it's being used by the element that have been clicked.
      sampleApplication.log("Preventing default actions");
      e.preventDefault();
    },

    changeBackground: function() {
      // here we need to avoid the "this" keyword, because it's being used by the element that have been clicked.
      sampleApplication.log("Changing background.");
      var $this = $( this );

      //access to the private content
      $this.css('background', config.div.background);
    },

    loadMe: function() {
      console.log( "Log me" );
    },

    log: function(functionName) {
      console.log("Loading: " + functionName);
    }
  };

  return app;

})(document, window, window.jQuery);

//caching the sample app
window.sampleApplication = sampleApplication;

$( document ).ready( sampleApplication.init )
$( window ).load( sampleApplication.load );
// usage
var init =  {
    ready : function() {
        sampleApplication.init();
    },

    load : function() {
        sampleApplication.load();
    }
};


$( document ).ready( init.ready )
$( window ).load( init.load );


// more
var PrimaryNameSpace = {

        settings : {
            foo: 'bar'
        },

        init: function () {
            var s = this.settings;
            this.nextMethod();
        },

        nextMethod: function () {
          console.log(s.foo);
        }

    };

$(function () {
    PrimaryNameSpace.init();
});

// another

var NewsWidget = (function () {
    var s; // private alias to settings
    
    return {
        settings: {
            numArticles: 5,
            articleList: $("#article-list"),
            moreButton: $("#more-button")
        },

        init: function() {
            s = this.settings;
            this.bindUIActions();
        },

        bindUIActions: function() {
            s.moreButton.on("click", function() {
                NewsWidget.getMoreArticles(s.numArticles);
            });
        },

        getMoreArticles: function(numToGet) {
            // $.ajax or something
            // using numToGet as param
        }

    };
})();

//====================

(function ($, MyObject, undefined) {
  MyObject.publicFunction = function() {
      console.log("This is a public function!");
  };
  var privateFunction = function() {
    console.log("This is a private function!");
  };
  
  MyObject.sayStuff = function() {
    this.publicFunction();
    privateFunction();
    privateNumber++;
    console.log(privateNumber);
  };
  var privateNumber = 0;
}(jQuery, window.MyObject = window.MyObject || {}));

MyObject.sayStuff();
MyObject.sayStuff();
MyObject.publicFunction();
MyObject.privateFunction(); // Returns error
privateFunction(); // Returns error