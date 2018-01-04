function sendForm() {
	jQuery.ajax({
		url : 'http://www.davidtheobald.de/easytoi-form-script.php',
		type : 'POST',
		success : function(results) {
			jQuery(".result").html(results);
		}
	});
}
