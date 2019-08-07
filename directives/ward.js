'use strict';

angular.module('bahmni.ipd')
    .directive('ward', [function () {
        return {
            restrict: 'E',
            controller: "WardController",
            scope: {
                ward: "="
            },
            template: require("../views/ward.html")
        };
    }]);
