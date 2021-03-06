'use strict';

angular.module('bahmni.ipd')
    .directive('adt', [function () {
        return {
            restrict: 'E',
            controller: "AdtController",
            scope: {
                patient: "=",
                encounterConfig: "=?bind",
                bed: "="
            },
            template: require("../views/adt.html")
        };
    }]);
