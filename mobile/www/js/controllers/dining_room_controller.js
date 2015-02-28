angular.module('uniplaces.controllers')

.controller('DiningCtrl', function($scope, $location, applicationService){
  // Living-Room Features
  $scope.dining_room_features = [
    { name: 'Chairs', field: 'chairs', value: '' },
    { name: 'Window', field: 'window', value: '' },
    { name: 'Balcony', field: 'balcony', value: '' },
    { name: 'Table', field: 'table', value: '' },
    { name: 'TV', field: 'tv', value: '' }
  ];

  $scope.area = { value: '' };

  $scope.dining_room = {};

  $scope.update_data = function() {
    object = $scope.dining_room_features;
    var features = applicationService.format_object(object);
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    $scope.dining_room['features'] = features;
    $scope.dining_room['area'] =  $scope.area.value;
    data['units']['dining_room'] = $scope.dining_room;
    window.localStorage['property_verification'] = applicationService.serialize_data(data);
    $location.url('app/bathroom');
  };
});
