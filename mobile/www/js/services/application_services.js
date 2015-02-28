angular.module('uniplaces.services', [])

.service('applicationService', function() {

  return {

    serialize_data : function(data) {
      return JSON.stringify(data);
    },

    deserialize_data : function(data) {
      return JSON.parse(data || '{}');
    },

    format_object : function(array) {
      var formated = {}
      for(var i=0; i < array.length; i++) {
        var obj = array[i];
        formated[obj.field] = obj.value;
      }
      return formated;
    },
  }
});
