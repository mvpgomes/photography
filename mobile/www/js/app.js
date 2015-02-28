angular.module('starter', ['ionic', 'uniplaces.controllers', 'uniplaces.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  .state('app.property', {
    url: "/property",
    views: {
      'menuContent': {
        templateUrl: "templates/property.html",
        controller: 'PropertyCtrl'
      }
    }
  })
  .state('app.features', {
    url: "/features",
    views: {
      'menuContent': {
        templateUrl: "templates/features.html",
        controller: 'PropertyFeaturesCtrl'
      }
    }
  })
  .state('app.rules', {
    url: "/rules",
    views: {
      'menuContent': {
        templateUrl: "templates/rules.html",
        controller: 'RulesCtrl'
      }
    }
  })
  .state('app.rent', {
    url: "/rent",
    views: {
      'menuContent': {
        templateUrl: "templates/rent.html",
        controller: 'RentCtrl'
      }
    }
  })
  .state('app.cleaningbills', {
    url: "/cleaningbills",
    views: {
      'menuContent': {
        templateUrl: "templates/cleaning_and_bills.html",
        controller: 'CleanBillsCtrl'
      }
    }
  })
  .state('app.kitchen', {
    url: "/kitchen",
    views: {
      'menuContent': {
        templateUrl: "templates/kitchen.html",
        controller: 'KitchenCtrl'
      }
    }
  })
  .state('app.living', {
    url: "/living",
    views: {
      'menuContent': {
        templateUrl: "templates/living_room.html",
        controller: 'LivingCtrl'
      }
    }
  })
  .state('app.dining', {
    url: "/dining",
    views: {
      'menuContent': {
        templateUrl: "templates/dining_room.html",
        controller: 'DiningCtrl'
      }
    }
  })
  .state('app.bedroom', {
    url: "/bedroom",
    views: {
      'menuContent': {
        templateUrl: "templates/bedroom.html",
        controller: 'BedroomCtrl'
      }
    }
  })
  .state('app.bathroom', {
    url: "/bathroom",
    views: {
      'menuContent': {
        templateUrl: "templates/bathroom.html",
        controller: 'BathroomCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
