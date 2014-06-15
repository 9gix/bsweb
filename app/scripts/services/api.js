'use strict';

/**
 * @ngdoc service
 * @name bswebApp.api
 * @description
 * # api
 * Constant in the bswebApp.
 */
angular.module('bswebApp')
  .constant('BSAPI', {
    url: 'http://127.0.0.1:8000',
    get authorizationEndpoint () {
      return this.url + '/oauth2/authorize/';
    },
    get tokenEndpoint () {
      return this.url + '/oauth2/token/';
    },
    clientId: 'gXFe3yEjlvz-a8ilXfUzkrV4rHq7UCUHcjIPrUeF',
    clientSecret: 'UKcCiKxWVMT.opZJCF62w?IC.;wugUG.3yGQTZAC8=pCZHQRSccUeurWBj2OhKl?-WM1F-jGTL4fpBtCF;DqqEMr7wB0x0AHTkEzWmK4FEZmV8UhMTHRiQr=yYdfWzNU',
    redirectUri: 'http://127.0.0.1:9000',
  });
