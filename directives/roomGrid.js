'use strict';

angular.module('bahmni.ipd')
    .directive('roomGrid', [function () {
        return {
            restrict: 'E',
            controller: 'RoomGridController',
            scope: {
                room: "="
            },
            template: require("../views/roomGrid.html")
        };
    }]);
