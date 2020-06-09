$(function () {
    //页面加载
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });
    $('#firstBg').attr('data-stellar-background-ratio',0.3);
    $('#secondBg').attr('data-stellar-background-ratio',0.3);
    $('#thirdBg').attr('data-stellar-background-ratio',0.3);
})