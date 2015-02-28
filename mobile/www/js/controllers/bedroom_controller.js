angular.module('uniplaces.controllers')

.controller('BedroomCtrl', function($scope, $location, applicationService){
  // Bedrooms
  $scope.bedrooms = { area: '', type: '', features: [] };
  // Bedroom name
  $scope.name = { name: '' };
  // Bedroom area
  $scope.area = { value: '' };
  // Bedroom available date
  $scope.available_date = { date: '' };
  // Bedroom maximum people
  $scope.maximum_people = { value: '' };
  // Bedroom price (1 Month)
  $scope.price_per_month = { value: '' };
  // Extra cost per month
  $scope.extra_cost_per_person = { value : '' };
  // Bedroom Type
  $scope.type = {};

  // Bedroom options
  $scope.options = [
    { label: 'single', value: 'single'},
    { label: 'double', value: 'double'},
    { label: 'twin', value: 'twin'},
    { label: 'triple', value: 'triple'}
  ];

  // Bedroom Features
  $scope.bedroom_features = [
    { name: 'Wardrobe', field: 'wardrobe', checked: '' },
    { name: 'Chest-of-Drawers', field: 'chest_of_drawers', checked: '' },
    { name: 'Desk', field: 'desk', checked: '' },
    { name: 'Chairs', field: 'chairs', checked: '' },
    { name: 'Sofa', field: 'sofa', checked: '' },
    { name: 'Sofa-Bed', field: 'sofa_bed', checked: '' },
    { name: 'Towels', field: 'towels', checked: '' },
    { name: 'Window', field: 'window', checked: '' },
    { name: 'Bed-Linen', field: 'bed_linen', checked: '' },
    { name: 'Balcony', field: 'balcony', checked: '' },
    { name: 'TV', field: 'tv', checked: '' },
    { name: 'Lock', field: 'lock', checked: '' },
  ];

  $scope.update = function(option) {
    $scope.type = option;
  }

  $scope.format_bedrooms = function(index) {
    object = $scope.bedroom_features;
    bedrooms = $scope.bedrooms;
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    bedrooms['features'] = applicationService.format_checkbox(object);
    bedrooms['area'] =  $scope.area.value;
    bedrooms['type'] =  $scope.type.value;
    data['units']['bedrooms'].push(bedrooms);
    return data;
  }

  $scope.add_bedroom = function() {
    var bedrooms_occupied = parseInt(window.localStorage['bedrooms_occupied']);
    var number_of_bedrooms = parseInt(window.localStorage['number_of_bedrooms']);
    if (number_of_bedrooms > 0) {
      var data = $scope.format_bedrooms(bedrooms_occupied);
      number_of_bedrooms--;
      window.localStorage['number_of_bedrooms'] = applicationService.serialize_data(number_of_bedrooms);
      window.localStorage['property_verification'] = applicationService.serialize_data(data);
    } else {
      console.log("You don't have any more bedrooms to add!");
    }

  }

  $scope.submit_report = function() {
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    console.log(data);
  };

});
