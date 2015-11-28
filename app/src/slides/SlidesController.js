(function(){

  angular
       .module('slides')
       .controller('SlidesController', [
          '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state',
          SlidesController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function SlidesController( $mdSidenav, $mdBottomSheet, $log, $q, $state) {
    var self = this;

    self.slides = [
      {
        Title: 'Landing',
        Icon: 'flight_land',
        State: 'landing'
      },
      {
        Title: 'About Me',
        Icon: 'face',
        State: 'aboutme'
      },
      {
        Title: 'Material Design',
        Icon: 'color_lens',
        State: 'materialdesign'
      },
      {
        Title: 'Standards',
        Icon: 'dns',
        State: 'standards'
      },
      {
        Title: 'ngMaterial',
        Icon: 'stars',
        State: 'ngmaterial'
      },
      {
        Title: 'Key Features',
        Icon: 'check_box',
        State: 'keyfeatures'
      },
      {
        Title: 'Dogfooding',
        Icon: 'pets',
        State: 'dogfooding'
      },
      {
        Title: 'Demo: Components',
        Icon: 'screen_share',
        State: 'democomponents'
      },
      {
        Title: 'Demo: Layout',
        Icon: 'view_quilt',
        State: 'demolayout'
      },
      {
        Title: 'Demo: Icons',
        Icon: 'grid_on',
        State: 'demoicons'
      },
      {
        Title: 'Demo: New Project',
        Icon: 'create_new_fodler',
        State: 'newproject'
      },
      {
        Title: 'Thank You',
        Icon: 'thumb_up',
        State: 'thankyou'
      },
      /*
      {
        Title: 'Our Stack',
        Icon: 'view_stream',
        State: 'ourstack'
      },
      */
      {
        Title: 'One More Thing ...',
        Icon: 'trending_up',
        State: 'gophercon'
      },
    ];

    self.setState = function(state) {
      $state.go(state);
    };

    self.toggleSidenav = function() {
      // var pending = $mdBottomSheet.hide() || $q.when(true);

      // pending.then(function(){
        $mdSidenav('left').toggle();
      // });
    }


  }

})();
