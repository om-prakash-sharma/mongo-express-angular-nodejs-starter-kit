/**
 * Created by OmPrakashSharma on 27-04-2017.
 */

angular.module('meanApp')
    .controller('homeCtrl', ['$scope', 'toaster', 'apiService',
        function ($scope, toaster, apiService) {

            $scope.userObj = {
                firstName: 'Om',
                lastName: 'Sharma',
                mobile: '8764333333',
                email: 'omshrm365@gmail.com'
            };

            $scope.showToaster = showToaster;
            $scope.registerUser = registerUser;

            /*
             *  Function to registerUser
             * */

            function registerUser(userObj) {

                if (userObj && userObj.mobile) {

                    apiService.userCreate(userObj).then(function (response) {

                        console.log('$http', ' post ', response.data);
                        if (response.data && response.data.info && response.data.info.status) {
                            showToaster('success', 'User registered successfully ..!');
                            $scope.userObj = {};
                        } else {
                            showToaster('warning', response.data.message);
                        }

                    }).catch(function (error) {

                        console.log('$http', ' post ', error);
                        showToaster('error', error.data && error.data.message ? error.data.message : 'Something went wrong')

                    }).finally(function () {

                    });
                }
            }

            function showToaster(type, message) {
                toaster.pop(type, 'Info', message);
            };

        }]);
