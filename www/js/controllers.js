angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('FormCtrl', function($scope) {
	$scope.form = {name: "Yee Siang", num1:0, num2:0}
	$scope.onNameChange = function () {
		console.log($scope.form);
	};

})

.controller('JsonCtrl', function($scope, $http, $ionicLoading){
	$scope.items = null;
	
	// better way of doing loading, pls refer to http://learn.ionicframework.com/formulas/loading-screen-with-interceptors/
	$ionicLoading.show({
		template: '<ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner><p>Loading...</p>'
	})
	$http.get('http://jsonplaceholder.typicode.com/posts').then(function(json) {
		$ionicLoading.hide();
		$scope.items = json.data;
		//console.log(json);
	}, function(err) {
	})
	
})

;
