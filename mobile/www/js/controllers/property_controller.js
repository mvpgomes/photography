angular.module('uniplaces.controllers')

.controller('PropertyCtrl', function($scope, $location, applicationService){
  // Property Typology
  $scope.typology = {
    type_code: '',
    accommodation_type_code: '',
    number_of_bedrooms: '',
    area: ''
  };
  // Property Adress
  $scope.address = {
    city_code: '',
    street: '',
    number: '',
    extra: '',
    postal_code: ''
  };
  // Landlord Information
  $scope.landlord = {};

  $scope.update_data = function() {
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    data.typology = $scope.typology;
    data.address = $scope.address;
    data.accommodation_provider = $scope.landlord;
    window.localStorage['property_verification'] = applicationService.serialize_data(data);
    window.localStorage['bedrooms_occupied'] = applicationService.serialize_data(0);
    window.localStorage['number_of_bedrooms'] = applicationService.serialize_data($scope.typology.number_of_bedrooms);
    $location.url('app/features');
  }
});
