'use strict';

/**
 * @ngdoc service
 * @name bswebApp.api
 * @description
 * # api
 * Constant in the bswebApp.
 */
angular.module('bswebApp')
  .constant('Settings', {
    bsapi: {
      url: 'http://128.199.179.181/',
      get tokenAuthEndpoint () {
        return this.url + '/token-auth/';
      },
      get oauthAuthorizationEndpoint () {
        return this.url + '/oauth2/authorize/';
      },
      get oauthTokenEndpoint () {
        return this.url + '/oauth2/token/';
      },
      get loginEndpoint () {
        return this.url + '/auth/login/';
      },
      get logoutEndpoint () {
        return this.url + '/auth/logout/';
      },
      clientId: 'gXFe3yEjlvz-a8ilXfUzkrV4rHq7UCUHcjIPrUeF',
      clientSecret: 'UKcCiKxWVMT.opZJCF62w?IC.;wugUG.3yGQTZAC8=pCZHQRSccUeurWBj2OhKl?-WM1F-jGTL4fpBtCF;DqqEMr7wB0x0AHTkEzWmK4FEZmV8UhMTHRiQr=yYdfWzNU',
      redirectUri: 'http://127.0.0.1:9000',
    },
    google: {},
    facebook: {},

  })
  .factory('BSAPI', function(){
    return {
    };
  });
