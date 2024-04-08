const assert = require("assert");
const verify = require("./verify");
const { describe, it } = require("node:test");


describe("verify tests", function() {
    function makeTest(desc, arg, expected) {
       it(desc + " testing with input file: " + arg, function() {
        assert.equal(verify(arg), expected); 
       });
    }
    
    makeTest("Basic test.", "test1.json", false);
    makeTest("Basic test.", "test2.json", true);
    makeTest("Asterisk at the beginning of string.", "test3.json", true);
    makeTest("Asterisk somewhere in the string.", "test4.json", true);
    makeTest("Array of resources.", "test5.json", true);
    makeTest("No resources.", "test6.json", true);
    makeTest("Multiple statements. Contains single asterisk.", "test7.json", false);
    makeTest("Multiple statements. Doesn't contain single asterisk.", "test8.json", true);
    makeTest("Object instead of array 1.", "test9.json", true);
    makeTest("Object instead of array 2.", "test10.json", false);
});