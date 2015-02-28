angular.module('uniplaces.controllers')

.controller('LivingCtrl', function($scope, $location, applicationService){
  // Living-Room Features
    $scope.living_room_features = [
      { name: 'Desk', field: 'desk', value: '' },
      { name: 'Chairs', field: 'chairs', value: '' },
      { name: 'Sofa', field: 'sofa', value: '' },
      { name: 'Sofa-Bed', field: 'sofa_bed', value: '' },
      { name: 'Window', field: 'window', value: '' },
      { name: 'Balcony', field: 'balcony', value: '' },
      { name: 'Coffee-Table', field: 'coffee_table', value: '' },
      { name: 'Table', field: 'table', value: '' },
      { name: 'TV', field: 'tv', value: '' }
    ];

    $scope.area = { value: '' };

    $scope.living_room = {
      area: '',
      features: [] };

    $scope.update_data = function() {
      object = $scope.living_room_features;
      var features = applicationService.format_object(object);
      var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
      $scope.living_room['features'] = features;
      $scope.living_room['area'] =  $scope.area.value;
      data['units']['living_room'] = $scope.living_room;
      window.localStorage['property_verification'] = applicationService.serialize_data(data);
      $location.url('app/dining');
    };
});
