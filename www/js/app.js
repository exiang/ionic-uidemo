// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) 
{
	$ionicPlatform.ready(function() {
		
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
		  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		  cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
		  // org.apache.cordova.statusbar required
		  StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.notfound', {
      url: '/notfound',
      views: {
        'menuContent': {
          templateUrl: 'templates/notfound.html',
        }
      }
    })
	.state('app.button', {
      url: '/button',
      views: {
        'menuContent': {
          templateUrl: 'templates/button.html',
        }
      }
    })
	.state('app.list', {
      url: '/list',
      views: {
        'menuContent': {
          templateUrl: 'templates/list.html',
        }
      }
    })
	.state('app.card', {
      url: '/card',
      views: {
        'menuContent': {
          templateUrl: 'templates/card.html',
        }
      }
    })
	.state('app.json', {
      url: '/json',
      views: {
        'menuContent': {
          templateUrl: 'templates/json.html',
          controller: 'JsonCtrl'
        }
      }
    })
	.state('app.form', {
      url: '/form',
      views: {
        'menuContent': {
			templateUrl: 'templates/form.html',
			controller: 'FormCtrl'
        }
      }
    })
	.state('app.slider', {
      url: '/slider',
      views: {
        'menuContent': {
          templateUrl: 'templates/slider.html',
        }
      }
    })
	.state('app.toggle', {
      url: '/toggle',
      views: {
        'menuContent': {
          templateUrl: 'templates/toggle.html',
        }
      }
    })
	.state('app.checkbox', {
      url: '/checkbox',
      views: {
        'menuContent': {
          templateUrl: 'templates/checkbox.html',
        }
      }
    })
	.state('app.radio', {
      url: '/radio',
      views: {
        'menuContent': {
          templateUrl: 'templates/radio.html',
        }
      }
    })
	
	.state('app.range', {
      url: '/range',
      views: {
        'menuContent': {
          templateUrl: 'templates/range.html',
        }
      }
    })
	.state('app.select', {
      url: '/select',
      views: {
        'menuContent': {
          templateUrl: 'templates/select.html',
        }
      }
    })
	.state('app.tab', {
      url: '/tab',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab.html',
        }
      }
    })
	.state('app.tabBottom', {
      url: '/tabBottom',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-bottom.html',
        }
      }
    })
	.state('app.tabBottom.home', {
      url: '/tabBottom-home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tabPage-home.html',
        }
      }
    })
	.state('app.tabBottom.about', {
      url: '/tabBottom-about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tabPage-about.html',
        }
      }
    })
	.state('app.tabIcon', {
      url: '/tabIcon',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-icon.html',
        }
      }
    })
	.state('app.tabIcon.home', {
      url: '/tabIcon-home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tabPage-home.html',
        }
      }
    })
	.state('app.tabIcon.about', {
      url: '/tabIcon-about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tabPage-about.html',
        }
      }
    })
	.state('app.tabAndroid', {
      url: '/tabAndroid',
      views: {
        'menuContent': {
          templateUrl: 'templates/tab-android.html',
        }
      }
    })
	.state('app.tabAndroid.home', {
      url: '/tabAndroid-home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tabPage-home.html',
        }
      }
    })
	.state('app.tabAndroid.about', {
      url: '/tabAndroid-about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tabPage-about.html',
        }
      }
    })
	.state('app.grid', {
      url: '/grid',
      views: {
        'menuContent': {
          templateUrl: 'templates/grid.html',
        }
      }
    })
	;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});


