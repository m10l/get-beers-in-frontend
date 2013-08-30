'use strict';

angular.module('getBeersInV2App')
.controller('DrinkersCtrl', function ( $scope, $http ) {

	// Connect to our API
	$http.get('http://localhost:1337/drinkers/')
	.success(function( data ){
		$scope.drinkers = data;
		console.log('Data from our API');
		console.log( data );
	});

	// Add a New Drinker
	$scope.addDrinker = function() {

		// Push to Server
		$http.post( 'http://localhost:1337/drinker/', {
			name : $scope.newDrinkerName,
			email : $scope.newDrinkerEmail
		});

		// Push to Front End (this doesn't seem very DRY)
		$scope.drinkers.push({
			name : $scope.newDrinkerName,
			email : $scope.newDrinkerEmail
		});

		// Empty fields ready for adding a new drinker
		$scope.newDrinkerName = '';
		$scope.newDrinkerEmail = '';

	};

	// Remove a Drinker
	$scope.removeDrinker = function( drinker ) {

		// Remove from Server
		$http.delete(' http://localhost:1337/drinker/' + drinker._id );

		// Remove from Front End (this doesn't seem very DRY)
		$scope.drinkers.splice( $scope.drinkers.indexOf( drinker ), 1 );

	};

	// Add a Round (UPDATE)
	$scope.addRound = function( drinker ) {

		$http.put(' http://localhost:1337/drinker/' + drinker._id, {
			rounds: {
				date : new Date(),
				test : 'Testing 234234'
			}
		});

		console.log ( $scope.rounds )

	};

});