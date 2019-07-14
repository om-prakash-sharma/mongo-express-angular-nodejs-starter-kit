/**
 * Created by OmPrakashSharma on 19-08-2017.
 */
angular.module('meanApp')
    .service('webCamService', function () {

        var imageURL = null;

        var setImageURL = function (newObj) {

            if (typeof newObj != 'string') {
                imageURL = newObj[0];
            } else {
                imageURL = newObj;
            }
        };

        var getImageURL = function () {
            return imageURL;
        };

        var cleanArray = function () {
            return imageURL = null;
        };

        return {
            setImageURL: setImageURL,
            getImageURL: getImageURL,
            cleanAllImages: cleanArray
        };

    });