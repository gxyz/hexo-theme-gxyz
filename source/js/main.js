$(document).ready(function() {
    $('pre').addClass('prettyprint linenums').attr('style', 'overflow:auto;');
    prettyPrint();

    $("#top-button").hide()//隐藏go to top按钮
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1) {//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
                $("#top-button").fadeIn();
            } else {
                $("#top-button").fadeOut();
            }
        });
    });


    // 给go to top按钮一个点击事件
    $("#top-button").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 800);//点击go to top按钮时，以800的速度回到顶部，这里的800可以根据你的需求修改
        return false;
    });
})