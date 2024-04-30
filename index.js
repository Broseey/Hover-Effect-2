$(document).ready(function() {
    TweenMax.set(".project-preview", {width:0});

    let tl = new TimelineLite();

    $(document).on("mouseover", ".navigation-item", function(evt) {
        tl = new TimelineLite();
        tl.to($(".project-preview"), 1, {
            width: "600px",
            ease: Expo.easeInOut
        });
    }).on("mouseout", ".navigation-item", function(evt) {
        tl =new TimelineLite();
        tl.to($(".project-preview"), 0.5, {
            width:0,
            ease:Expo.easeInOut
        });
    });
});

$(".navigation-link-1").hover(function() {
    $(".project-preview").css({"background-image": "url(img-1.jpg)"});
});

$(".navigation-link-2").hover(function() {
    $(".project-preview").css({"background-image": "url(./assets/images/img1.jpg)"});
});

$(".navigation-link-3").hover(function() {
    $(".project-preview").css({"background-image": "url(./assets/images/img2.webp)"});
});

$(".navigation-link-4").hover(function() {
    $(".project-preview").css({"background-image": "url(./assets/images/img3.webp)"});
});

$(".navigation-link-5").hover(function() {
    $(".project-preview").css({"background-image": "url(./assets/images/img4.webp)"});
});

$(".navigation-link-6").hover(function() {
    $(".project-preview").css({"background-image": "url(./assets/images/img5.webp)"});
});

$(".navigation-link-7").hover(function() {
    $(".project-preview").css({"background-image": "url(./assets/images/img6.webp)"});
});

$(".navigation-link-8").hover(function() {
    $(".project-preview").css({"background-image": "url(./assets/images/img7.webp)"});
});

$(".navigation-link-1").hover(function() {
    $(".project-preview").css({"background-image": "url(./assets/images/img8.webp)"});
});

$(window).scroll(function() {
    let scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $(".progressbar").css("height", scrollPercent + "%");
});