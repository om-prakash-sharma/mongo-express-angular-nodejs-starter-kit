/**
 * Created by OmPrakashSharma on 11-07-2018.
 */

'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var responseStatus = require('../../config/api-codes');
var config = require('../../config/config');
var fs = require('fs');
var async = require('async');
var _ = require('lodash');
var path = require('path');

module.exports = function (app) {

    var User = app.models.User;

    app.listUserByName = function (req, res) {


        User.aggregate([
            { "$group": {
                "_id": {
                    "firstName": "$firstName",
                    "email": "$email",
                    "lastName": "$lastName",
                    "mobile": "$mobile"
                },
                "count": { "$sum": 1 }
            }},
            { "$group": {
                "_id": "$_id.firstName",
                "books": {
                    "$push": {
                        "email": "$_id.email",
                        "mobile": "$_id.mobile",
                        "lastName": "$_id.lastName",
                        "firstName": "$_id.firstName"
                    },
                },
                "count": { "$sum": "$count" }
            }}
        ] , function (err, userResponse) {

             console.log('-- om -- err, userResponse : ' , err, userResponse);
            if (err) {
                return res.status(responseStatus.INTERNAL_ERROR).send({
                    message: 'INTERNAL SERVER ERROR',
                    error: err
                });
            }
            return res.status(responseStatus.SUCCESS).send(userResponse);
        });

    };

};