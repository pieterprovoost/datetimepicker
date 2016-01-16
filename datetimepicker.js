var datetimepicker = angular.module("datetimepicker", []);

datetimepicker.directive("datetimepicker", function($filter) {
	return {
		restrict: "EA",
		replace: true,
		scope: {
			date: "=",
			options: "="
		},
		template: "<input id=\"picker\" ng-model=\"str\" ng-readonly=\"true\" style=\"cursor: pointer;\"></input>",
		link: function(scope, elem, attr) {
			scope.options.onChangeDateTime = function(dp, i) {
				scope.date = dp;
			}
			$("#picker").datetimepicker(scope.options);
			scope.$watch("date", function() {
				scope.str = $filter("date")(scope.date, scope.options.angularFormat);
			});
		}
	}    
});
