const assert = require('assert');

const isPrintableKeyEvent = require('./dist/index.js');

// These tests are obviously not comprehensive,
// but enough to test basic functionality:

assert.equal(isPrintableKeyEvent({ key: "ArrowDown" }), false);
assert.equal(isPrintableKeyEvent({ key: "Enter" }), false);
assert.equal(isPrintableKeyEvent({ key: "Escape" }), false);

assert.equal(isPrintableKeyEvent({ key: "a" }), true);
assert.equal(isPrintableKeyEvent({ key: "å" }), true);

assert.equal(isPrintableKeyEvent({ key: "e" }), true);
assert.equal(isPrintableKeyEvent({ key: "é" }), true);
