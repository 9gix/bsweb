'use strict';

/**
 * @ngdoc service
 * @name bswebApp.reservation
 * @description
 * # reservation
 * Factory in the bswebApp.
 */
angular.module('bswebApp')
  .factory('Reservation', function (Restangular, Membership) {
    return {
      makeRequest: function (userbookId) {
        var reservation = Restangular.service('reservation');
        return reservation.post({
          'owner_book': userbookId,
          'borrower_membership': Membership.getId(),
        });
      }
    };
  });
