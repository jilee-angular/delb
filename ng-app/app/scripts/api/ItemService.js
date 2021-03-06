'use strict';

angular.module('App')
  .factory('Items', ['$resource', 
    function($resource){
      return $resource('/api/v1/item.json', {}, {
        query: { method: 'GET', isArray: true},
        create: { method: 'POST'}
      });
  }]);

angular.module('App')
  .factory('Item', ['$http', function($http){ 
    var endpoint = {
      GetItems: '/api/v1/item.json',
      GetItem: '/api/v1/item/',
      PostItem: '/api/v1/item'
    };
    return {
      getItems: function (returnData) {
        returnData = returnData || {};
        returnData.take = returnData.take || 10;
        returnData.skip = returnData.skip || 0;
        return $http.get(endpoint.GetItems);
      },
      getItem: function (id) {
        return $http.get(endpoint.GetItem, {
          params: {id: id},
          withCredentials: true,
          timeout: 80000
        });
      },
      postItem: function(title, image, description, price){
        return $http.post(endpoint.PostItem, {
          user_id: user_id,
          title: title,
          image: image,
          description: description,
          price: price
        });
      }
    };
  }]);