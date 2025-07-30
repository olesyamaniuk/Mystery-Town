$(function () {
  $(".y-a-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-a-gallery-list-left",
    nextArrow: ".y-a-gallery-list-right",
  });
});
$(function () {
  $(".y-a-characters-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-a-characters-list-left",
    nextArrow: ".y-a-characters-list-right",
  });
});

$(function () {
  $(".y-a-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-a-reviews-list-left",
    nextArrow: ".y-a-reviews-list-right",
  });
});
