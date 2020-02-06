$(function () {
    $('.noti-link').on("click", function () {
        $('.notification').toggleClass('show');
    });

    $('.notification ul li').on("click", function () {
        $('.notification ul li').removeClass('active');
        $(this).addClass('active');
    });
});