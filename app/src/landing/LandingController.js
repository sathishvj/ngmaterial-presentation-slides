w(function(){

  angular
       .module('landing')
       .controller('LandingController', [
          '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          LandingController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LandingController( $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;


  }

})();
