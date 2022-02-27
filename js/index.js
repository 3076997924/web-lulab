$(function(){
    //导航栏切换 section
    // $(".nav li a").mouseover(function(){
    //     $(this).addClass("current");
    // })    
    // $(".nav li a").click(function(){
    //     $(this).addClass("current");
    //     $(this).parents(".nav-li").siblings("li").find("a").removeClass("current");
    // });

    //course-item 切换 section
    $(".course-item").click(function(){
        $(this).addClass("course-current");
        $(this).siblings("div").removeClass("course-current");
    })

    var flag = true;
    var intentionTop = $(".intention").offset().top;
    //side-nav 侧导航栏 电梯 section
    toggleNav()
    //显示隐藏 section
    function toggleNav(){
        if($(document).scrollTop() >= intentionTop){
            $(".side-nav").fadeIn();
        } else {
            $(".side-nav").fadeOut();
        }
    }

    $(window).scroll(function(){
        toggleNav();
        //页面滚动自动给li添加样式类名
        if(flag){
            $(".floor").each(function(i,ele){
                if($(document).scrollTop()>= $(ele).offset().top){
                    $(".side-nav li").eq(i).addClass("side-current").siblings().removeClass("side-current");
                }
            })
        }
    })
    //点击li 滑动到相应的内容区域
    $(".side-nav li").click(function(){
        flag = false ;
        var current = $(".floor").eq($(this).index()).offset().top;
        $("body , html").stop().animate({
            scrollTop : current
        },function(){
            flag = true;
        })
        //点击之后让当前li添加样式
        $(this).addClass("side-current").siblings().removeClass("side-current");
    })
    //返回顶部goback
    $(".goback").click(function(){
        $("body,html").animate({
            scrollTop: 0
        })
    })
    //收起 pack section
    $(".pack").click(function(){
            $(".side-nav").stop().animate({
                right : -100
            },function(){
                $(".packout").css({
                    display:"block"
                })
            })
    })
    $(".packout").click(function(){
        $(".packout").css({
            display:"none"
        })
        $(".side-nav").stop().animate({
            right : 10
        })
    })

    //导航栏 nav
    var flagone = true;
    $('#toTeam').click(function(){
        flagone =false;
        $("body , html").stop().animate({
            scrollTop : $('.team').offset().top
        },function(){
            flagone = true;
        })
    })
    $('#toGuest').click(function(){
        flagone =false;
        $("body , html").stop().animate({
            scrollTop : $('.guest').offset().top
        },function(){
            flagone = true;
        })
    })
    $('#toTeacher').click(function(){
        flagone =false;
        $("body , html").stop().animate({
            scrollTop : $('.teacher').offset().top
        },function(){
            flagone = true;
        })
    })
    $('#toShare').click(function(){
        flagone =false;
        $("body , html").stop().animate({
            scrollTop : $('.share').offset().top
        },function(){
            flagone = true;
        })
    })
})