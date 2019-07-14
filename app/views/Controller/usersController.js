/**
 * Created by OmPrakashSharma on 27-04-2017.
 */

angular.module('meanApp')
    .controller('userCtrl', ['$scope', '$http', 'toaster', '$location', 'apiService',
        function ($scope, $http, toaster, $location, apiService) {

            $scope.usersInfo = [];
            $scope.pageSize = 20;
            $scope.pagination = {};
            $scope.pagination.currentPage = 1;
            $scope.pagination.totalItems = 0;
            $scope.pagination.pageSize = 5;
            $scope.filterObj = {};

            $scope.showToaster = showToaster;
            $scope.getFilterInfo = getFilterInfo;
            $scope.getUserList = getUserList;

            getUserList($scope.pagination.currentPage, $scope.filterObj);

            /*
             *  Function to getUserList
             * */

            function getUserList(page, filter) {

                page = page - 1;
                var query = getFilterInfo(filter);

                apiService.userList(page, query).then(function (response) {

                    console.log('apiService', ' userList ', response.data);
                    if (response.data && response.data.users && response.data.users.length) {
                        $scope.usersInfo = response.data.users;
                        $scope.pagination.totalItems = response.data.totalCount;
                    } else {
                        $scope.usersInfo = [];
                        $scope.pagination.totalItems = 0;
                        showToaster('warning','No records found')
                    }


                }).catch(function (error) {

                    console.log('apiService', ' userList ', error);

                }).finally(function () {

                });

            }

            /*
             *  Function to getFilterInfo
             * */

            function getFilterInfo(filterData) {

                var temp = "&";
                if (filterData && filterData.searchQuery && filterData.searchQuery != undefined && filterData.searchQuery != '') {
                    temp = temp + "searchQuery=" + filterData.searchQuery;
                    console.log(temp);
                }
                console.log(temp);
                return temp;
            }

            function showToaster(type, message) {
                toaster.pop(type, "Info", message);
            };

        }]);
