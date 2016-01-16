var app = angular.module("example", ["datetimepicker"])

app.controller("demoController", function($scope) {

	$scope.options = {
		lang: "nl",
		i18n: {
			nl: {
				months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
				dayOfWeek:["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"]
			}
		},
		timepicker: true,
		format: "d/m/Y H:i",
		angularFormat: "dd/MM/yyyy HH:mm",
		dayOfWeekStart: 1
	};

	$scope.set = function() {
		$scope.date = new Date();
	};

});
