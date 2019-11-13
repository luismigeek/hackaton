var clock;

function init(time) {
    clock = $('.clock').FlipClock(time, {
        clockFace: 'HourCounter',
        countdown: true,
        autoStart: false,
        callbacks: {
            start: function () {
                console.log('The clock has started!');
            }
        }
    });
}

$(document).ready(function () {

    $('.start').css('display', 'none');

    $('.create').click(function (e) {

        var time = $("#time").val();
        init(time);

        $('#time').css('display', 'none');
        $('.create').css('display', 'none');
        $('.start').css('display', 'inline');
    });

    $('.start').click(function (e) {
        clock.start();
        $('.start').css('display', 'none');
    });

});