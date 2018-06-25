document.addEventListener('DOMContentLoaded', function (){
    // 导航吸顶
    var nav = document.getElementsByClassName('nav-top')[0];
    var body = document.documentElement || document.body;
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

    //选项卡

    $('.tab-head li').click(function (e){
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab-body li:eq('+ index +')').addClass('active').siblings().removeClass('active')
    })

});