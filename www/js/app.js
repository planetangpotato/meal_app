angular.module('starter' , ['ionic','starter.controller'])
.config(function($stateProvider , $urlRouterProvider){
	$stateProvider
	.state('app',{
		url:'/app',
		abstract : true , 
		cache: false , 
		templateUrl: 'templates/menu.html'
	})
	.state('login',{
		url: '/login',
templateUrl:'templates/login.html'
	})

	.state('register',{
		url: '/register',
			templateUrl: 'templates/register.html'
	
	})
	.state('app.about',{
		url: '/about',
		views: {
			'menuContent': {
				templateUrl: 'templates/about.html'
			}
		}
	})

	.state('app.set',{
		url: '/set',
		views: {
			'menuContent': {
				templateUrl: 'templates/set.html'
			}
		}
	})

	.state('app.notif', {
    url: '/notif',
    views: {
      'menuContent': {
        templateUrl: 'templates/notif.html',
        controller: 'delete'
      }
    }
  })

	.state('app.profile',{
		url: '/profile',
		views:{
			'menuContent':{
				templateUrl:'templates/profile.html'
			}
		}
	})

	.state('app.api',{
		url: '/api',
		views:{
			'menuContent':{
				templateUrl:'templates/api.html'
			}
		}
	})

	.state('app.meal',{
		url: '/meal',
		views:{
			'menuContent': {
				templateUrl: 'templates/meal.html'
			}
		}
	})

	.state('app.message', {
    url: '/message',
    views: {
      'menuContent': {
        templateUrl: 'templates/message.html'
    
      }
    }
  })

	.state('setup',{
		url: '/setup',
		templateUrl: 'templates/setup.html'
	})
	
	$urlRouterProvider.otherwise('/login')
});