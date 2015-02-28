angular.module('uniplaces.controllers')

.controller('LoginCtrl', function($scope, $location){

  // JSON Object that represents a property verification
  var property_verification = {
    date_of_session: '2015-01-16',
    photographer_id: "c7dd0a6f-fad9-4f37-abbc-1b4b9dc50f60",
    accommodation_provider: '',
    rent_as: '',
    typology: [],
    rules: '',
    address: '',
    property_features: '',
    services: [],
    bills: [],
    conditions: '',
    rent: [],
    units: {
      kitchen: [],
      living_room: [],
      dining_room: [],
      bedrooms: [],
    },
  };

  // If the object is not stored locally, use local storage to store the object.
  if (window.localStorage['property_verification'] == null) {
    window.localStorage['property_verification'] = JSON.stringify(property_verification);
  }

  $scope.login = function() {
    $location.url('app/property');
  }
});
