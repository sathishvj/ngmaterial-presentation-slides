(function(){
  'use strict';

  // Prepare the 'landing' module for subsequent registration of controllers and delegates
  angular.module('landing', [ 'ngMaterial', 'ui.router' ])

  .config(['$stateProvider',
		function($stateProvider) {

			$stateProvider
				.state('landing', {
		      url: '/landing',
		      templateUrl: 'src/landing/view/Landingpage.html',
		      controller: 'LandingController'
		    })
				.state('aboutme', {
		      url: '/aboutme',
		      templateUrl: 'src/landing/view/AboutMe.html',
		      controller: 'LandingController'
		    })
				.state('materialdesign', {
		      url: '/materialdesign',
		      templateUrl: 'src/landing/view/MaterialDesign.html',
		      controller: 'LandingController'
		    })
				.state('standards', {
		      url: '/standards',
		      templateUrl: 'src/landing/view/Standards.html',
		      controller: 'LandingController'
		    })
				.state('ngmaterial', {
		      url: '/ngmaterial',
		      templateUrl: 'src/landing/view/NgMaterial.html',
		      controller: 'LandingController'
		    })
				.state('keyfeatures', {
		      url: '/keyfeatures',
		      templateUrl: 'src/landing/view/KeyFeatures.html',
		      controller: 'LandingController'
		    })
				.state('dogfooding', {
		      url: '/dogfooding',
		      templateUrl: 'src/landing/view/Dogfooding.html',
		      controller: 'LandingController'
		    })
				.state('democomponents', {
		      url: '/democomponents',
		      templateUrl: 'src/landing/view/DemoComponents.html',
		      controller: 'LandingController'
		    })
				.state('demolayout', {
		      url: '/demolayout',
		      templateUrl: 'src/landing/view/DemoLayout.html',
		      controller: 'LandingController'
		    })
				.state('demoicons', {
		      url: '/demoicons',
		      templateUrl: 'src/landing/view/DemoIcons.html',
		      controller: 'LandingController'
		    })
				.state('newproject', {
		      url: '/newproject',
		      templateUrl: 'src/landing/view/NewProject.html',
		      controller: 'LandingController'
		    })
				.state('thankyou', {
		      url: '/thankyou',
		      templateUrl: 'src/landing/view/ThankYou.html',
		      controller: 'LandingController'
		    })
		    /*
				.state('ourstack', {
		      url: '/ourstack',
		      templateUrl: 'src/landing/view/OurStack.html',
		      controller: 'LandingController'
		    })
				*/
				.state('gophercon', {
		      url: '/gophercon',
		      templateUrl: 'src/landing/view/Gophercon.html',
		      controller: 'LandingController'
		    })
		    ;

		}
	])
  ;


})();
