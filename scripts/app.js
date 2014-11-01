'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * Main module of the application.
 */
// angular
//   .module('myapp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });

(function() {
  var app = angular.module("yhack", [
    'ui.router'
  ]).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    //------=, $locationProvider
    $stateProvider.state('main', {
      url: '/',
      templateUrl: '../views/landing.html',
      controller: 'MainController'
    }).state('login', {
      url: '/login',
      templateUrl: '../views/login.html',
      controller: 'SubmitController'
    }).state('register', {
      url: '/register',
      templateUrl: '../views/register.html'
    });
    //$locationProvider.html5Mode(true);
  });

  app.controller('MainController', function($location) {
    this.action = '';

    this.setState = function(newAction) {
        $location.path(newAction);
    };
  });

  app.controller('SubmitController', function($scope, $window, $http, $location) {

    this.user = {};

    this.submitLogin = function(new_user) {
      this.user = new_user;

      // http://reqr.es/api/login
      var r = $http({
                      method: "post",
                      url: "https://propellor.herokuapp.com/users/login",
                      dataType:'jsonp',
                      data: {
                        email:this.user.email,
                        password:this.user.password
                      }
                    });
                    r.then(function(object){
                      console.log(object.data);
                    }.bind(this));


      //               return (r.then(succesfulLogin, errorLogin));
      // http request here. to post;
      // set this to remember if user is logged in sessionStore.setItem('uid','loggedIn');
      // then we will have to do more logic to check the time stamp when they logged in.
      // Because this could exploited.
    };

    this.setState = function(newAction) {

      if (newAction == '/login')
        $location.path(newAction);

      if (newAction == '/register')
        $location.path(newAction);

      if(newAction == '/user')
            $location.path(newAction);
    };

  });


  app.controller('RegisterController', function($scope, $window, $http, $location) {
    this.user = {};

    this.submitRegister = function(new_register) {
      this.user = new_register;
        var r = $http({
                        method: "POST",
                        //url: "api/user/login",
                        url:'http://reqr.es/api/register',
                        // params: {
                        //     action: "login"
                        // },
                        data: {
                            email: 'sydney@fife',
                            password : 'pistol'
                        }
                    });
                    r.then(function(obj){
                        console.log(obj.data)
                        this.setState('/user');
                    }.bind(this));

    };

    this.setState = function(newAction) {

      if (newAction == '/login')
        $location.path(newAction);

      if (newAction == '/register')
        $location.path(newAction);

      if(newAction == '/user')
            $location.path(newAction);
    };

  });

// app.controller('userProfile', function($http){
//     // this.data = {
//     //   img:'https://pbs.twimg.com/profile_images/431228300061470720/VSPYQJDD_400x400.jpeg',
//     //   name:'Brian Inoa',
//     //   logState:'Log-Out'
//     // };

//     this.data = {};

//     var r = $http({
//                       method: "GET",
//                       //url: "api/user/login",
//                       url:'http://reqr.es/api/users',
//                       // params: {
//                       //     action: "login"
//                       // },
//                       // data: {
//                       //     email: this.user.email,
//                       //     pass:this.user.password
//                       // }
//                   });
//                   r.then(function(obj){
//                       this.data.first_name = obj.data.data[0].first_name;
//                       this.data.id = obj.data.data[0].id;
//                       this.data.last_name = obj.data.data[0].last_name;

//                             $('#tabControl').click(function(){
//                                   // $('#sideTab').hide(500);
//                                   $('#sideTab').animate({'width' : '20px'},500);
//                                   // $('.col-lg-9').each(function(indx, element){
//                                   //   $(this).toggleClass('col-lg-9');
//                                   //   $(this).toggleClass('col-lg-12');
//                                   // });
//                                   // $('.col-md-9').each(function(indx, element){
//                                   //   $(this).toggleClass('col-md-9');
//                                   //   $(this).toggleClass('col-md-12');
//                                   // });
//                             });

//                   }.bind(this));
//                   //return (r.then(succesfulLogin, errorLogin));


// });
//   //
//   //
//   //
//   //   app.factory('Auth', ['Base64', '$cookieStore', '$http', function (Base64, $cookieStore, $http) {
//   //     // initialize to whatever is in the cookie, if anything
//   //     $http.defaults.headers.common['Authorization'] = 'Basic ' + $cookieStore.get('authdata');
//   //
//   //     return {
//   //         setCredentials: function (username, password) {
//   //             var encoded = Base64.encode(username + ':' + password);
//   //             $http.defaults.headers.common.Authorization = 'Basic ' + encoded;
//   //             $cookieStore.put('authdata', encoded);
//   //         },
//   //         clearCredentials: function () {
//   //             document.execCommand("ClearAuthenticationCache");
//   //             $cookieStore.remove('authdata');
//   //             $http.defaults.headers.common.Authorization = 'Basic ';
//   //         }
//   //
//   //     };
//   //
//   // }]);
//   //
//   //
//   //

})();
