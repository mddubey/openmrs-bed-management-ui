'use strict';

window.Bahmni = window.Bahmni || {};
Bahmni.IPD = Bahmni.IPD || {};

angular.module('bahmni.ipd', ['bahmni.common.conceptSet', 'bahmni.common.logging']);
require("lodash");
//upgraded to latest

require("./lib/jquery/jquery-ui-1.10.4.custom.min.css");
require("ng-dialog/css/ngDialog.min.css");
require("ng-dialog/css/ngDialog-theme-default.min.css");
require("ng-dialog/css/ngDialog-theme-plain.min.css");
require("ng-tags-input/build/ng-tags-input.bootstrap.min.css");
require("ng-tags-input/build/ng-tags-input.min.css");
require("./styles/clinical.css");

require("./lib/jquery/jquery-ui-1.10.4.custom.min.js")
require("./lib/jquery/jquery.cookie.custom");

require("angular-sanitize");
require("angular-recursion");
require("select2");
require("angular-ui-select2/src/select2");
require("@uirouter/angularjs");
require("angular-bindonce/bindonce");
require("ng-infinite-scroll");
require("stacktrace-js/stacktrace");
require("ng-clip");
require("angular-elastic/elastic");
require("angular-translate");
require("angular-cookies");
require("angular-translate-loader-static-files");
require("angular-translate-storage-cookie");
require("angular-translate-storage-local");
require("angular-translate-handler-log");
require("angular-file-upload");
require("ng-dialog/js/ngDialog");

require("ng-tags-input");
require("./lib/angular-workers/dist/angular-workers");


require("./route-errorhandler")
require("./common-constants");

require("bahmniapps-commons/dist/bahmni-util-commons");
require("bahmniapps-commons/dist/authentication");
require("bahmniapps-commons/dist/bahmni-config-commons");
require("bahmniapps-commons/dist/bahmni-appframework-commons");
require("bahmniapps-commons/dist/bahmni-models-commons");
require("bahmniapps-commons/dist/bahmni-patient-commons");``
require("bahmniapps-commons/dist/ui-helper");
require("bahmniapps-commons/dist/bahmni-domain-commons");
require("bahmniapps-commons/dist/bahmni-conceptset-commons");
require("bahmniapps-commons/dist/bahmni-patientsearch-commons");
require("bahmniapps-commons/dist/bahmni-logging-commons");
require("bahmniapps-commons/dist/bahmni-obs-commons");
require("bahmniapps-commons/dist/displaycontrols");
require("bahmniapps-commons/dist/bahmni-i18n-commons");
// require("formService");

require("./constants")
require("./app.js");
require("./initialization.js");
require("./patientInitialization.js");
require("./bedInitialization.js");
require("./controllers/bedManagementController.js");
require("./controllers/headerController.js");
require("./controllers/adtController.js");
require("./controllers/wardController.js");
require("./controllers/roomController.js");
require("./controllers/editTagsController.js");
require("./controllers/roomListController.js");
require("./controllers/roomGridController.js");
require("./directives/adtPatientSearch.js");
require("./directives/adt.js");
require("./directives/ward.js");
require("./directives/room.js");
require("./directives/editAdtObservations.js");
require("./directives/roomList.js");
require("./directives/roomGrid.js");
require("./directives/backLinksCacheBuster.js");
require("./services/wardService.js");
require("./services/bedManagementService.js");
require("./services/queryService.js");
require("./services/bedTagMapService.js");
