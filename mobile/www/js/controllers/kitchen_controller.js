angular.module('uniplaces.controllers')

.controller('KitchenCtrl', function($scope, $location, applicationService){
  // Kitchen Features
    $scope.kitchen_features = [
      { name: 'Chairs', field: 'chairs', value: '' },
      { name: 'Window', field: 'window', value: '' },
      { name: 'Balcony', field: 'balcony', value: '' },
      { name: 'Fridge', field: 'Fridge', value: '' },
      { name: 'Freezer', field: 'freezer', value: '' },
      { name: 'Stove', field: 'stove', value: '' },
      { name: 'Oven', field: 'oven', value: ''},
      { name: 'Microwave', field: 'microwave', value: '' },
      { name: 'Washing-machine', field: 'washing_machine', value: '' },
      { name: 'Dryer', field: 'dryer',  value: '' },
      { name: 'Dishwasher', field: 'dishwasher', value: '' },
      { name: 'Dishes-Cultery', field: 'dishes_cultery', value: '' },
      { name: 'pots-pan', field: 'pots-pan', value: ''},
    ];
    // Kitchen Object
    $scope.kitchen = {
      area: '',
      features: [] };
    //Kitchen Area
    $scope.area = { value: '' };

    $scope.update_data = function() {
      object = $scope.kitchen_features;
      var features = $scope.kitchen_features;
      var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
      $scope.kitchen['features'] = applicationService.format_checkbox(features);
      $scope.kitchen['area'] =  $scope.area.value;
      data['units']['kitchen'] = $scope.kitchen;
      window.localStorage['property_verification'] = applicationService.serialize_data(data);
      $location.url('app/living');
    };
});
