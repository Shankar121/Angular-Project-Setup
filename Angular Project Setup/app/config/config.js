var techMApp = angular.module('techMApp', ['ngRoute','ui.bootstrap', 'appController', 'ngTagsInput', 'ngResource', 'ngSanitize']);

techMApp.value('baseurl', 'http://ec2-52-88-175-1.us-west-2.compute.amazonaws.com/accordTestMel/');
techMApp.value('hosturl', 'http://ec2-52-88-175-1.us-west-2.compute.amazonaws.com/');
techMApp.value('dburl', 'http://ec2-52-88-175-1.us-west-2.compute.amazonaws.com/dbserv/');
techMApp.value('nodeurl', 'http://ec2-52-88-175-1.us-west-2.compute.amazonaws.com/etherserv/');

techMApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                $scope.$apply(function () {
                    modelSetter($scope, element[0].files[0]);
                });
            });
        }
    };
}]);



techMApp.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});

techMApp.config(['$httpProvider', function ($httpProvider) {
    //$httpProvider.defaults.useXDomain = true;
 // $httpProvider.defaults.withCredentials = true;
   delete $httpProvider.defaults.headers.common['X-Requested-With'];
 //   $httpProvider.defaults.headers.delete = { 'Content-Type': 'application/json' };
}
]);


techMApp.config(["$routeProvider", "$httpProvider", "$locationProvider", function ($routeProvider, $locationProvider, $httpProvider) {


    //    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    //   delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider
		.when("/", {
		    templateUrl: "app/views/home.html",
    	    controller: "HomeController"
		}).when("/viewContract", {
    	    templateUrl: "app/views/viewContract.html",
    	    controller: "ViewContractController"
    	}).when("/viewSmartContract", {
    	    templateUrl: "app/views/viewSmartContract.html",
    	    controller: "ViewSmartContractController"
    	}).when("/createContract", {
    	    templateUrl: "app/views/createContract.html",
    	    controller: "CreateContractController"
    	}).when("/createSmartContract", {
    	    templateUrl: "app/views/createSmartContract.html",
    	    controller: "CreateSmartContractController"
    	}).when("/viewTransactions", {
    	    templateUrl: "app/views/viewTransactions.html",
			controller: "viewTransactionsController"
    	}).when("/viewTransactionDetail",{
			 templateUrl: "app/views/viewTransactionDetail.html",
			 controller: "viewTransactionDetailController"
		});
    /*.otherwise({ redirectTo: '/login.html' });*/
}]);

