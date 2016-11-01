'use strict';
const MongoModels = require('mongo-models');
require('reflect-metadata');

const MakeMockModel = function () {

    const mock = {};

    Reflect.ownKeys(MongoModels).forEach((key) => {

        mock[key] = MongoModels[key];
    });

    return mock;
};


module.exports = MakeMockModel;
