$(document).ready(function () {
	$('.datepicker').datepicker();
	$("input[type='number']").inputSpinner()
	$('.table').DataTable({
		"pageLength": 2
	});
});