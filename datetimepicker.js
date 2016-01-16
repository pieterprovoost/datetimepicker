var datetimepicker = angular.module("datetimepicker", []);

datetimepicker.directive("datetimepicker", function($filter) {
	return {
		restrict: "EA",
		replace: true,
		scope: {
			date: "=",
			options: "="
		},
		template: "<input readonly ng-model=\"str\" type=\"text\" style=\"background-color: #ffffff; cursor: pointer;\" class=\"form-control\"></input>",
		link: function(scope, elem, attr) {
			scope.options.onChangeDateTime = function(dp, i) {
				scope.date = dp;
			}
			$(elem).datetimepicker(scope.options);
			scope.$watch("date", function() {
				scope.str = $filter("date")(scope.date, scope.options.angularFormat);
			});
		}
	}    
});
