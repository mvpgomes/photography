angular.module('uniplaces.controllers')

.controller('RentCtrl', function($scope, $location, applicationService){

  $scope.options = [
    { label: 'whole', value: 'true' },
    { label: 'room', value: 'false' }
  ];

  $scope.as_whole = {};

  $scope.rent_details = [
    { name: 'Value per Month', field: 'base_price', value: '' },
    { name: 'Maximum People', field: 'maximum_guests', value: ''},
    { name: 'Extra per Person', field: 'extra_per_person', value: ''},
    { name: 'Extra fees', field: 'extra_after', value: ''},
    { name: 'Minimum Nights', field: 'minimum_nights', value: ''}
  ];

  $scope.rent = {};

  $scope.commnents = { text: '' };

  $scope.update = function(option) {
    $scope.as_whole = option;
  }

  $scope.rent_as_whole = function() {
    return $scope.as_whole.value == 'true';
  }

  $scope.format_conditions = function(data) {
    return { cancellation_policy: 'strict', minimum_nights: data[4].value };
  }

  $scope.format_price = function() {
    $scope.rent['base_price'] = { amount: $scope.rent_details[0].value, currency: 'EU' };
    $scope.rent['maximum_guests'] = $scope.rent_details[1].value;
    $scope.rent['extra_per_person'] = { amount: $scope.rent_details[2].value, currency: 'EU' };
    $scope.rent['extra_after'] = $scope.rent_details[3].value;
  }

  $scope.update_data = function(){
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    data.rent_as = $scope.as_whole.label;
    data.conditions = $scope.format_conditions($scope.rent_details);
    $scope.format_price($scope.rent_details);
    data.rent = $scope.rent;
    window.localStorage['property_verification'] = applicationService.serialize_data(data);
    $location.url('app/cleaningbills');
  }
});
