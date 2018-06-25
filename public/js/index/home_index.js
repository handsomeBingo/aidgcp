document.addEventListener('DOMContentLoaded', function (){
    var body = document.documentElement || document.body;
    var nav = document.getElementsByClassName('nav-top')[0];
    document.onmousewheel = function (e){
        var sT = body.scrollTop;
        if (sT > 60) {
            nav.className = nav.className  += nav.className.indexOf('nav-hover') > -1 ?
                ''
                : ' nav-hover';
        } else {
            nav.className = nav.className.replace('nav-hover', '');
        }
    };

    //banner
    $(".banner-wrapper").responsiveSlides({
        nav: true,
        pager: true,
        pause: true,
        before: function(index) {
            var $next = $(".slider-img").children('li').eq(index);
            if (!$next.hasClass("filled")) {
                $next.css({
                    'background': $next.data("background")
                });
                $next.addClass("filled");

                if ($('.first-screen-item').length) {
                    $('.first-screen-item').remove();
                }
            }
        },
    });
});