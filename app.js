var freelancerClone = angular.module('freelancerClone', ['ui.router']);

freelancerClone.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url:"",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'navigation': {
        templateUrl: "partials/navigation.html",
      },
      'body': {
        templateUrl: "partials/body.html",
      },
      'footer': {
        templateUrl: "partials/footer.html"
      },
      'hire': {
        templateUrl: "partials/hire.html"
      }
    }
  });
});
