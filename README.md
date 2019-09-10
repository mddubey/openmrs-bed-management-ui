## Differences with OpenMRS-Module-bahmniapps
Below has been the changes in libraries from OpenMRS-Module-bahmniapps

| Library | Change |
| ------  | ------------------- |
| ngDialog| Using `ng-dialog` instead. |
| jquery.cookie@1.4.0 | Upgraded to `1.4.1` since the existing version is not present in `NPM`. Manually changed the line 12 from `define(['jquery/jquery'], factory);` instead of `define(['jquery'], factory);`. [Reference link](https://github.com/facebook/create-react-app/issues/679#issuecomment-247928334)|
| angular-ui-router | Renamed to `@uirouter/angularjs`. |
| angular-bindonce | Using directly from github since the latest is not published in `NPM`. |
| ngInfiniteScroll@1.3.1 | Using `ng-infinite-scroll@1.3.0`, since this is the latest version on `NPM`. According to this [thread](https://github.com/sroze/ngInfiniteScroll) there are no code changes between `1.3.0` to `1.3.4`. |
| jquery-ui-1.10.4.custom.min | Using `jquery-ui-bundle@1.11.4` since the `jquery-ui` is not bundled by default. `1.11.4` is the oldest version on `NPM`  |

## Global variables from library
Few libraries(angular, jquery) used in BahmniApps export global variables. Webpack doesn't support the idea of global variables by default. All these global variables are exported using `webpack.ProvidePlugin`. Check the `webpack.config.js` plugins section.

## Other Fixes
* According to [this issue](https://github.com/webpack/webpack/issues/2049), `webpack` doesn't work well with `angular 1`. There has been a fix provided for them using `exports-loader`. There were similar issues for `jquery 1`.

## Duplicate code
* Duplicated `error-routehandler`. It is a small utility and need not to be extracted in library. If we are putting more stuff, it can go to a library.
* Duplicated `openmrs-module-bahmniapps/ui/app/common/constants.js`. This can be merged with `bed-management/constants.js`

## TODO
* `bahmni-commons/authentication.js` should take login redirect url as configuration. As of now it is harcoded as bahmni-login-page url.
* Libraries in `bahmni-commons` use Bahmni Cookies to read the current location. Decide how this should be going forward:
    ```
    grep "$bahmniCookieStore.get(Bahmni.Common.Constants.locationCookieName)" -r node_modules/bahmniapps-commons
    ```
* `bahmni-commons/authentication.js#loadCredentials` reads a cookie set by bahmni to figure out current user.
    ```
    grep "$bahmniCookieStore.get(Bahmni.Common.Constants.currentUser)" -r node_modules/bahmniapps-commons
    ```
* Retrospective feature also uses bahmni cookies.
* Fix `blank-user.png` serving from webpack.
* Fix All tab of Patient Queue.
* Send EMREncounter instead of BahmniEncounter
    * Bahmni Encounter transaction takes care of default encounter type based on location.
    * Bahmni Encounter delegates to EmrEncounterService which takes care of encounter role of provider.
    * Contract changes in EMR Encounter Request Data:
    
    
| OpenMRS Encounter                   | Bahmni Encounter|
| -----------------------------------| ------------------- |
| visit                              | visitTypeUuid |
| obs                                | observations |
| patient                            | patientUuid |
| encounterType                      | encounterTypeUuid |
| location                           | locationUuid |
| encounterProviders.provider        | providers.uuid |
| encounterProviders.encounterRole   | <Optional> |

    * Contract changes in EMR Encounter Response Data:
    
| OpenMRS Encounter          | Bahmni Encounter|
| ---------------------------| ------------------- |
| response.data.patient.uuid | response.data.patientUuid |
| response.data.uuid         | response.data.encounterUuid |

## Config Setup
* Users must have `app:adt` privilege or someother privilege which will be used in `extension.json`. For now extension.json is not configured for any privilege.
* Configure sqls for all the search-handlers defined in `extension.json`.
* Configure `mrs.genders` propetry in global propery to `{"M":"Male", "F":"Female","O":"Other"}`.
* Global Properties for :
    - emrapi.sqlSearch.admittedPatients
    - emrapi.sqlSearch.patientsToAdmit
    - emrapi.sqlSearch.patientsToDischarge
  Example query
    select distinct concat(pn.given_name,' ', ifnull(pn.family_name,'')) as name,
        pi.identifier as identifier,
        concat("",p.uuid) as uuid
        from person_name pn
        join patient_identifier pi on pi.patient_id = pn.person_id
        join person p on p.person_id = pn.person_id;

* Setup admission location and beds
* Global property
```
    emrapi.EmrApiVisitAssignmentHandler.encounterTypeToNewVisitTypeMap => e22e39fd-7db2-45e7-80f1-60fa0d5a4378:ace71ab4-6bd6-465c-948f-a57f88a5f898
```
