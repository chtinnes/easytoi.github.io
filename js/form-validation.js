$(document).ready(function() {
	$('form').checkValidity({
		validateEvents : 'submit',
		reset : function() {
			$('textarea, input', this).reset();
		}
	});
	$('input:not([type=submit])').checkValidity({
		validateEvents : 'change'
	});
});
