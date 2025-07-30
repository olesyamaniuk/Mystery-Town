$(function () {
  $(".y-s-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    cssEase: "linear",
    prevArrow: ".y-s-gallery-list-left",
    nextArrow: ".y-s-gallery-list-right",
  });
});
$(function () {
  $(".y-s-characters-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-s-characters-list-left",
    nextArrow: ".y-s-characters-list-right",
  });
});

$(function () {
  $(".y-s-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".y-s-reviews-list-left",
    nextArrow: ".y-s-reviews-list-right",
  });
});
