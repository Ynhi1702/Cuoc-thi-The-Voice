// main.js for The Voice Landing Page
$(document).ready(function() {
    // Đếm ngược đến ngày hết hạn đăng ký
    $('#countdown-register').countdown('2026/07/20 23:59:59', function(event) {
        if(event.offset.totalSeconds < 0) {
            $(this).html("Đã hết hạn đăng ký!");
        } else {
            $(this).html(
                event.strftime('%D ngày %H:%M:%S')
            );
        }
    });

    // Đếm ngược đến ngày sự kiện
    $('#countdown-event').countdown('2026/08/06 00:00:00', function(event) {
        if(event.offset.totalSeconds < 0) {
            $(this).html("Sự kiện đã bắt đầu!");
        } else {
            $(this).html(
                event.strftime('%D ngày %H:%M:%S')
            );
        }
    });

    // Form đăng ký
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        $('#registerMessage').fadeIn();
        setTimeout(() => {
            $('#registerMessage').fadeOut();
            $('#registerForm')[0].reset();
        }, 3500);
    });
});