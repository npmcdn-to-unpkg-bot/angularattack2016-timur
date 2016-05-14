(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>AngularAttack 2016</h1><p>Your project runs!</p>'
    })
    .Class({
      constructor: function() {
        console.log('hello angular 2!')
      }
    });
})(window.app || (window.app = {}));
