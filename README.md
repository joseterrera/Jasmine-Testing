A feed reader web application with tests using jasmine,  a behavior driven testing framework for javascript.

To check out this repository:
* Open index.html in your browser. There is at the bottom of the site all of jasmine tests. There are 7 specs detailing the expectations for each of them. At this point all tests pass. Jasmine would point out if a test doesn't pass.

To check out the tests:
* Open jasmine/spec/feedreader.js.
The feedreader.js is the file containing all the specs and tests.

How do we test things with Jasmine? With matchers. These are key words where one can basically test if a condition exists.

for instance:
// a suite:
// A suite then contains a bunch of tests that are related to each other. Each suite will have a set of expectations.
// Each suite begins with the function 'describe' that has 2 parameters: the name of the suite and the function which contains the calls to the expectation methods called Specs.

describe("Hello world", function() {
    it("says world", function() {
        expect(helloWorld()).toContain("world");
    });
});
// Specs are defined using the it() method that also accepts a name and a function and may take some variables and the expect method.
// Jasmine has certain pre-defined matchers that we use whenever we set our expectations. I've included a list of sites that I found especially helpful to get myself started.
helpful tutorials:
http://evanhahn.com/how-do-i-jasmine/
http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/










