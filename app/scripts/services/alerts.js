'use strict';

/**
 * @ngdoc service
 * @name bswebApp.alert
 * @description
 * # alert
 * Usage:
 * - alerts.push({type: 'success', msg: 'Voila'});
 * - alerts.push({type: 'info', msg: 'allo'});
 * - alerts.push({type: 'warning', msg: 'Ouch'});
 * - alerts.push({type: 'danger', msg: 'Opps'});
 */
angular.module('bswebApp')
  .value('alerts', []);
