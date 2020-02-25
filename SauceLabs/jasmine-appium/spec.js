describe('Sample Test', function () {
  it('should Login to application', function () {
  	browser.get('https://angularjs.org/');
  	expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
  });  
});