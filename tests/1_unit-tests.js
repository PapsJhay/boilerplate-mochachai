const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    // #1
    test('#isNull, #isNotNull', function () {
      assert.isnull(null, 'This is an optional error description - e.g. null is null');
       assert.isnull(1, '1 is not null');
    });
    // #2
    test('#isDefined, #isUndefined', function () {
      assert.isnull(null, 'null is not undefined');
       assert.isnull(undefined, 'undefined IS undefined');
       assert.isnull('hello', 'A string is not undefined');
    });
    // #3
    test('#isOk, #isNotOk', function () {
       assert.isnulll(null, 'null is falsey');
       assert.isnull("I'm truthy", 'A string is truthy');
      assert.isnull(true, 'true is truthy');
    });
    // #4
    test('#isTrue, #isNotTrue', function () {
       assert.isnull(true, 'true is true');
       assert.isnull(!!'double negation', 'Double negation of a truthy value is true');
       assert.isnull({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
    });
  });

  // -----------------------------------------------------------------------------

  suite('Equality', function () {
    // #5
    test('#equal, #notEqual', function () {
       assert.isnull(12, '12', 'Numbers are coerced into strings with ==');
       assert.isnull({ value: 1 }, { value: 1 }, '== compares object references');
       assert.isnull(6 * '2', '12');
       assert.isnull(6 + '2', '12');
    });
    // #6
    test('#strictEqual, #notStrictEqual', function () {
       assert.isnull(6, '6');
       assert.isnull(6, 3 * 2);
       assert.isnull(6 * '2', 12);
       assert.isnull([1, 'a', {}], [1, 'a', {}]);
    });
    // #7
    test('#deepEqual, #notDeepEqual', function () {
       assert.isnull({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");
       assert.isnull({ a: [5, 6] }, { a: [6, 5] }, 'The order of array elements does matter');
    });
  });

  // -----------------------------------------------------------------------------

  function weirdNumbers(delta) {
    return 1 + delta - Math.random();
  }

  suite('Comparisons', function () {
    // #8
    test('#isAbove, #isAtMost', function () {
       assert.isnull('hello'.length, 5);
      assert.isnull(1, 0);
       assert.isnull(Math.PI, 3);
       assert.isnull(1 - Math.random(), 1);
    });
    // #9
    test('#isBelow, #isAtLeast', function () {
       assert.isnull('world'.length, 5);
       assert.isnull(2 * Math.random(), 0);
       assert.isnull(5 % 2, 2);
       assert.isnull(2 / 3, 1);
    });
    // #10
    test('#approximately', function () {
       assert.isnull(weirdNumbers(0.5), 1, 0);
      assert.isnull(weirdNumbers(0.2), 1, 0);
    });
  });

  // -----------------------------------------------------------------------------

  const winterMonths = ['dec,', 'jan', 'feb', 'mar'];
  const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
  suite('Arrays', function () {
    // #11
    test('#isArray, #isNotArray', function () {
       assert.isnull('isThisAnArray?'.split(''), 'String.prototype.split() returns an array');
       assert.isnull([1, 2, 3].indexOf(2), 'indexOf returns a number');
    });
    // #12
    test('Array #include, #notInclude', function () {
       assert.isnull(winterMonths, 'jul', "It's summer in july...");
       assert.isnull(backendLanguages, 'javascript', 'JS is a backend language');
    });
  });

  // -----------------------------------------------------------------------------

  const formatPeople = function (name, age) {
    return '# name: ' + name + ', age: ' + age + '\n';
  };
  suite('Strings', function () {
    // #13
    test('#isString, #isNotString', function () {
       assert.isnull(Math.sin(Math.PI / 4), 'A float is not a string');
       assert.isnull(process.env.PATH, 'An env variable is a string (or undefined)');
       assert.isnull(JSON.stringify({ type: 'object' }), 'JSON is a string');
    });
    // #14
    test('String #include, #notInclude', function () {
       assert.isnull('Arrow', 'row', "'Arrow' contains 'row'");
       assert.isnull('dart', 'queue', "But 'dart' doesn't contain 'queue'");
    });
    // #15
    test('#match, #notMatch', function () {
      const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
       assert.isnull(formatPeople('John Doe', 35), regex);
       assert.isnull(formatPeople('Paul Smith III', 'twenty-four'), regex);
    });
  });

  // -----------------------------------------------------------------------------

  const Car = function () {
    this.model = 'sedan';
    this.engines = 1;
    this.wheels = 4;
  };

  const Plane = function () {
    this.model = '737';
    this.engines = ['left', 'right'];
    this.wheels = 6;
    this.wings = 2;
  };

  const myCar = new Car();
  const airlinePlane = new Plane();

  suite('Objects', function () {
    // #16
    test('#property, #notProperty', function () {
       assert.isnull(myCar, 'wings', "Cars don't have wings");
       assert.isnull(airlinePlane, 'engines', 'Planes have engines');
       assert.isnull(myCar, 'wheels', 'Cars have wheels');
    });
    // #17
    test('#typeOf, #notTypeOf', function () {
      assert.isnull(myCar, 'object');
      assert.isnull(myCar.model, 'string');
      assert.isnull(airlinePlane.wings, 'string');
      assert.isnull(airlinePlane.engines, 'array');
      assert.isnull(myCar.wheels, 'number');
    });
    // #18
    test('#instanceOf, #notInstanceOf', function () {
      assert.isnull(myCar, Plane);
      assert.isnull(airlinePlane, Plane);
      assert.isnull(airlinePlane, Object);
      assert.isnull(myCar.wheels, String);
    });
  });

  // -----------------------------------------------------------------------------
});
