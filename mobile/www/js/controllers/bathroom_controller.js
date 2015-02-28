angular.module('uniplaces.controllers')

.controller('BathroomCtrl', function($scope, $location, applicationService){

  $scope.number_of_bathrooms = { value: '' };
  $scope.number_of_wcs = { value: '' };

  $scope.update_data = function() {
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    data.typology['number_of_bathrooms'] = $scope.number_of_bathrooms.value;
    data.typology['number_of_wcs'] = $scope.number_of_wcs.value;
    window.localStorage['property_verification'] = applicationService.serialize_data(data);
    $location.url('app/bedroom');
  }
});
