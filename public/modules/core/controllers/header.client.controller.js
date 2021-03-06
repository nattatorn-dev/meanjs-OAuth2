'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$http', '$location',
	function($scope, Authentication, Menus, $http, $location) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		$scope.initData = function() {
				$scope.credentials = null;
		}
		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
				$scope.isCollapsed = false;
		});

		if ($scope.authentication.user) $location.path('/');

		$scope.signupActive = function() {
				$('#secureSigninForm').data('formValidation').resetForm(true);
				$scope.initData();
		}

		$scope.LoginActive = function(e) {
				$('#secureLoginForm').data('formValidation').resetForm(true);
				$scope.initData();
		}

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				$scope.authentication.user = response;
				 $location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				$scope.authentication.user = response;
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
