// Declare app level module which depends on filters, and services
angular.module('sgw.sample.breadcrumb', ['sgw.ui.breadcrumb'])
	.controller('BreadcrumbSampleCtrl', ['$scope', 'breadcrumbService', function($scope, breadcrumbService) {
		breadcrumbService.set('top',
				[
				 {href: '#', label: 'Home'},
				 {href: '#', label: 'My Projects'},
				]
		);
	}])
	;