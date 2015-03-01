angular.module('uniplaces.controllers')

.controller('BedroomCtrl', function($scope, $location, applicationService){
  // Bedrooms
  $scope.bedrooms = { area: '', type: '', features: [], rent: [] };
  // Bedroom name
  $scope.name = { name: '' };
  // Bedroom area
  $scope.area = { value: '' };
  // Bedroom rent
  $scope.rent = {};
  // Bedroom available date
  $scope.available_date = { date: '' };
  // Bedroom maximum people
  $scope.maximum_people = { value: '' };
  // Bedroom price (1 Month)
  $scope.price_per_month = { value: '' };
  // Extra cost per month
  $scope.extra_per_person = { value : '' };
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
    { name: 'Wardrobe', field: 'wardrobe', value: '' },
    { name: 'Chest-of-Drawers', field: 'chest_of_drawers', value: '' },
    { name: 'Desk', field: 'desk', value: '' },
    { name: 'Chairs', field: 'chairs', value: '' },
    { name: 'Sofa', field: 'sofa', value: '' },
    { name: 'Sofa-Bed', field: 'sofa_bed', value: '' },
    { name: 'Towels', field: 'towels', value: '' },
    { name: 'Window', field: 'window', value: '' },
    { name: 'Bed-Linen', field: 'bed_linen', value: '' },
    { name: 'Balcony', field: 'balcony', value: '' },
    { name: 'TV', field: 'tv', value: '' },
    { name: 'Lock', field: 'lock', value: '' },
  ];

  $scope.update = function(option) {
    $scope.type = option;
  }

  $scope.format_rent = function() {
    $scope.rent['base_price'] = { amount: $scope.price_per_month, currency: 'EU' };
    $scope.rent['maximum_guests'] = $scope.maximum_people.value;
    $scope.rent['extra_per_person'] = { amount: $scope.extra_per_person.value, currency: 'EU' };
    return $scope.rent;
  }

  $scope.format_bedrooms = function() {
    object = $scope.bedroom_features;
    bedrooms = $scope.bedrooms;
    var data = applicationService.deserialize_data(window.localStorage['property_verification'] || '{}');
    bedrooms['features'] = applicationService.format_object(object);
    bedrooms['area'] =  $scope.area.value;
    bedrooms['type'] =  $scope.type.value;
    bedrooms['rent'] = $scope.format_rent();
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
