'use strict';

angular.module('bahmni.ipd')
    .directive('room', [function () {
        return {
            restrict: 'E',
            controller: "RoomController",
            scope: {
                room: "="
            },
            template: require("../views/room.html")
        };
    }]);
