// Countdown
$(document).ready(function() {
	$('#countdown').countdown('2026/08/06', function(event) {
		$(this).html(
			event.strftime('%D ngày %H:%M:%S đến thời điểm diễn ra sự kiện!')
		);
	});

	// Simple registration form interaction
	$('#registerForm').submit(function(e) {
		e.preventDefault();
		$('#registerMessage').fadeIn();
		setTimeout(() => {
			$('#registerMessage').fadeOut();
			$('#registerForm')[0].reset();
		}, 3500);
	});
});