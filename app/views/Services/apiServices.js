'use strict';

angular.module('meanApp')
    .service('apiService', ['$http', 'config', function ($http, config) {

        var API_BASE = config.END_POINT;

        this.userCreate = function (userObj) {
            var promise = $http.post(API_BASE + config.USER , userObj);
            return promise;
        };

        this.userUpdate = function (userId, userObj) {
            var promise = $http.put(API_BASE + config.USER + userId , userObj);
            return promise;
        };

        this.userDelete = function (userId) {
            var promise = $http.delete(API_BASE + config.USER + userId );
            return promise;
        };

        this.userInfo = function (userId) {
            var promise = $http.get(API_BASE + config.USER + userId );
            return promise;
        };

        this.userList = function (page, userQuery) {
            var query = "?page" + page + userQuery;
            var promise = $http.get(API_BASE + config.USER + query);
            return promise;
        };


    }]);
