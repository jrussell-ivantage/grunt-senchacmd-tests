'use strict';

var grunt = require('grunt')
    , path = require('path')
    , fs = require('fs')
    ;

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.senchacmd = {
  setUp: function(done) {
    // Perform necessary setup here.
    // Workspace and app for testing are made using grunt shell task.
    done();
  },
  default_options: function(test) {
    test.expect(2);

    // ---------------------------------------------
    // When we ran the default task, it should have
    // made a 'production' folder with 'app-all-sencha-build.js'
    // inside
    // ---------------------------------------------
    var folder = __dirname + '/fixtures/testworkspace/build/testapp/production/'
        , file = path.join(folder, 'app-all-sencha-build.js')
        ;

    test.ok(fs.existsSync(folder), 'There should be a production folder. (' + folder + ')');
    test.ok(fs.existsSync(file), 'There should be a production app-all-sencha-build.js file. (' + file + ')');

    test.done();
  },
  custom_options: function(test) {
    test.expect(2);
    
    // ---------------------------------------------
    // Running the task with options should have made
    // a testing folder with the same structure
    // ---------------------------------------------
    var folder = __dirname + '/fixtures/testworkspace/build/testapp/testing/'
        , file = path.join(folder, 'app-all-sencha-build.js')
        ;

    test.ok(fs.existsSync(folder), 'There should be a testing folder. (' + folder + ')');
    test.ok(fs.existsSync(file), 'There should be a testing app-all-sencha-build.js file. (' + file + ')');

    test.done();
  },
};
