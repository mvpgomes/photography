angular.module('uniplaces.controllers')

.controller('RulesCtrl', function($scope, $location, applicationService){

  // Features variable
  $scope.rules = [
    { name: 'Pets-allowed', field: 'pets_allowed', value: ''},
    { name: 'Females-only', field: 'females_only', value: '' },
    { name: 'International-only', field: 'international_only', value: ''},
    { name: 'Students-only', field: 'students_only', value: '' },
    { name: 'Males-only', field: 'males_only', value: ''},
    { name: 'Visitors-allowed', field: 'overnight_guests_allowed', value: ''},
    { name: 'Smoking-allowed', field: 'smoking_allowed', value: '' },
    { name: 'Postgraduates-only', field: 'postgraduates-only', value: ''},
  ];

  $scope.update_data = function() {
    object = $scope.rules;
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    var rules = applicationService.format_object(object);
    data.rules = rules;
    window.localStorage['property_verification'] = applicationService.serialize_data(data);
    $location.url('app/rent');
  }

});
