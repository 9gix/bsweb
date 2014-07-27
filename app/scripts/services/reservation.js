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
    var reservation = Restangular.service('reservation');
    return {
      makeRequest: function (userbookId) {
        return reservation.post({
          'owner_book': userbookId,
          'borrower_membership': Membership.getId(),
        });
      },
      all: function(){
        return reservation.getList();
      },
    };
  });
