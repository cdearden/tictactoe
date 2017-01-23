const chai = require('chai');
const expect = chai.expect;
const vm = require('vm');
const fs = require('fs');
const path = './index.js';

const code = fs.readFileSync(path);
vm.runInThisContext(code);

describe("Tictactoe", function() {
  it("Game should exist", function() {
    expect('Game').to.exist;
  });


});
