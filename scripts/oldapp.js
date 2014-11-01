'use strict';

(function() {
  // var app = angular.module("yhack", [
  // 'ui.router'
  // ]).config(function($stateProvider, $urlRouterProvider) {
  //   $stateProvider.state('main', {
  //     url: '',
  //     templateUrl: '../index.html'
  //   }).state('login', {
  //     url: '/login',
  //     templateUrl: '../views/login.html'
  //   }).state('register', {
  //     url: '/register',
  //     templateUrl: '../views/register.html'
  //   });
  // });

  var app = angular.module("yhack", [
    'ui.router'
  ]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('');
    //------=, $locationProvider
    $stateProvider.state('landing', {
      url: '',
      templateUrl: '../views/landing.html',
      controller: 'MainController'
    }).state('login', {
      url: '/login',
      templateUrl: '../views/login.html'
    }).state('register', {
      url: '/register',
      templateUrl: '../views/register.html'
    });
  });


app.controller('MainController', function($location) {

  this.setState = function(newAction) {
    console.log('called');
    if (newAction == '/login')
      $location.path(newAction);
    //set ui-router to login.html
    if (newAction == '/register')
      $location.path(newAction);
    //set ui-router to register.html
  };

});


  app.controller('LoginRequestController', function() {

    this.loggingInUser = {};

    this.submitRequest = function(user) {
      if (user) {
        this.loggingInUser = user;
        var r = $http({
          method: "post",
          url: "http://propellor.herokuapp.com/users/login",
          data: {
            email: this.loggingInUser.email,
            password: this.loggingInUser.password
          }
        });
        r.then(function(object) {
          console.log(object.data);
          // this.setState('/user');
        }.bind(this));
      }
    };

  });

  app.controller('SignupRequestController', function() {

    this.registeringUser = {};

    this.submitRequest = function(user) {
      if (user) {
        this.registeringUser = user;
        var r = $http({
          method: "post",
          url: "http://propellor.herokuapp.com/users/signup",
          data: {
            email: registeringUser.email,
            password: registeringUser.password,
            verify: registeringUser.verify
          }
        });
        r.then(function(object) {
          console.log(object.data);
          // this.setState('/user');
        }.bind(this));
      }
    };

  });


})();
