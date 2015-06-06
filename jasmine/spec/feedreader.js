/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    /* This test will loop through each feed
     * in the allFeeds object and ensure it has a URL defined
     * and that the URL is not empty. Using forEach can check on each
     * of the feeds.
     */
    it('should have a URL defined which is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBeNaN();
      })
    });
    /* This is a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('has a name deined and the name is not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });
  });
  /* This is a test that ensures the menu element is
   * hidden by default. You'll have to analyze the HTML and
   * the CSS to determine how we're performing the
   * hiding/showing of the menu element.
   */
  describe('The Menu', function() {
    var body = $('body'),
      iconLink = $('.menu-icon-link');


    it('ensures the menu element is hidden by default', function() {
      expect(body.hasClass('menu-hidden')).toBeTruthy();
    });
    /* This is a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     * It should have 2 expectations that should change every time
     * we click the icon link.
     */
    it('should display when clicked and hide when clicked again', function() {
      //it will have two expectations and they should change every time we click
      //the icon link.
      iconLink.click();
      expect(body.hasClass('menu-hidden')).toBeFalsy();
      iconLink.click();
      expect(body.hasClass('menu-hidden')).toBeTruthy();
    });
  });

  describe('Initial Entries', function() {
    /* This is a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test wil require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */
    var entry;
    beforeEach(function(done) {
      loadFeed(0, done);
    });
    it('ensures when the loadfeed function is called and takes in at least one entry', function(done) {
      //I need to check for at least one single entry, which should be the something greater than 0,
      //that is produced after loadfeed is called.
      entry = $('.entry');
      expect(entry.length).toBeGreaterThan(0);
      done();
    });
  });
  /* This is a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   *loadFeed() is asynchronous.
   * we will have to compare initial and new content to see that
   * they actually changed.
   * we need to store initial value, then current and compare the
   * loadFeed initially and
   * when we add content.
   * to make variables accessible we will store them outside ouf
   * the functions
   */
  describe('New Feed Selection', function() {
    var initialContent,
        newContent;
    var feed = $('.feed');
    beforeEach(function(done) {
      loadFeed(0, function() {
        //store initial content
        initialContent = feed.html();
        done();
      });
    });
    it('ensures the content actually changes when loadFeed is called', function(done) {
      loadFeed(1, function() {
        //store new content
        newContent = feed.html();
        expect(initialContent).not.toBe(newContent);
        done();
      });
    });
  });
}());