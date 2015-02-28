angular.module('uniplaces.controllers')

.controller('CleanBillsCtrl', function($scope, $location){

  $scope.maximum = { capped: true, max: { amount: '', currency_code: 'EUR'} };
  $scope.water = { included: '' };
  $scope.electricity = { included: ''};
  $scope.gas = { present:'', included: ''};
  $scope.internet = {included:'' };

  $scope.options = [
    { label: 'full', value: 'full' },
    { label: 'common', value: 'common' }
  ];

  $scope.cleaning = { periodicity: '', type: '' };

  $scope.bills = {};

  $scope.services = {};

  $scope.update = function(option) {
    $scope.type = option.value;
  }

  $scope.update_data = function() {
    var data = JSON.parse(window.localStorage['property_verification'] || '{}');
    $scope.bills['maximum'] = $scope.maximum;
    $scope.bills['water'] = $scope.water;
    $scope.bills['electricity'] = $scope.electricity;
    $scope.bills['gas'] = $scope.gas;
    $scope.bills['internet'] = $scope.internet;
    data['bills'] = $scope.bills;
    console.log($scope.bills);
    $scope.services['cleaning'] = $scope.cleaning;
    data['services'] = $scope.services;
    window.localStorage['property_verification'] = JSON.stringify(data);
    $location.url('/app/kitchen');
  }
});
