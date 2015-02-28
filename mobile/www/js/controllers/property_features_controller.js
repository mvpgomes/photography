angular.module('uniplaces.controllers')

.controller('PropertyFeaturesCtrl', function($scope, $location, applicationService){
  // Features variable
  $scope.property_features = [
    { name: 'Accessibility', field: 'accessibility', value: ''},
    { name: 'Wi-Fi', field: 'wi_fi', value: '' },
    { name: 'Resident-Landlord', field: 'resident_landlord', value: ''},
    { name: 'Cable-TV', field: 'cable_tv', value: '' },
    { name: 'Central Heating', field: 'central_heating', value: ''},
    { name: 'Air-Conditioning', field: 'air_conditioning', value: ''},
    { name: 'Outdoor Area', field: 'outdoor_area', value: '' },
    { name: 'Towels', field: 'towels', value: ''},
    { name: 'Bed-Linen', field: 'bed_linen', value: ''}
  ];

  $scope.update_data = function() {
    object = $scope.property_features;
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    var features = applicationService.format_object(object);
    data.property_features = features;
    window.localStorage['property_verification'] = applicationService.serialize_data(data);
    $location.url('app/rules');
  }
});
