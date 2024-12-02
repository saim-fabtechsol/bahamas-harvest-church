$('.home-slider').slick({
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
});

$(document).ready(function () {
    $(".accordian-btn").click(function () {
        $(".accordian-content")
            .not($(this).closest("div").siblings(".accordian-content"))
            .slideUp();
        $(".accordian-btn .accordian-icon img")
            .not($(this).find(".accordian-icon img"))
            .attr("src", "imgs/accordian-btn-white.png");

        $(this).closest("div").siblings(".accordian-content").slideToggle();
        $(this).find(".accordian-icon img").attr("src", "imgs/accordian-btn-green.png");
    });
});