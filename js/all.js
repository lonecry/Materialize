/**
 * Created by lonec on 2015-9-8.
 */
$('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    }
);
$(document).ready(function() {
    $('select').material_select();

    //日期选择
    $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    //字数控制输入
    $('input#input_text, textarea#textarea1').characterCounter();
    // Initialize collapse button


    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();

    // 导航栏下拉框
    $(".dropdown-button").dropdown();

    //搜索框
   /* $('#search').click(function(){
            $(this).addClass("white");
    })*/
    //焦点图

    // Pause slider
       // $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');

    //MODAL 初始化
    $('.modal-trigger').leanModal();

    //视差滚动
    $('.parallax').parallax();

    //图钉
    $('.tabs-wrapper .row').pushpin();

    //scrofile 插件
    var options = [
        {selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
        {selector: '#staggered-test', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
        {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
        {selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")' }
    ];
    Materialize.scrollFire(options);
    $('.scrollspy').scrollSpy();


    //tabs 导航栏
    //$('ul.tabs').tabs();
    $('ul.tabs').tabs('select_tab', 'tab_id');

    //定义加入收藏夹函数
    var join_favorite=function (siteUrl, siteName){
        //捕获加入收藏过程中的异常
                try{
                    //判断浏览器是否支持document.all
                    if(document.all){
                        window.external.addFavorite(siteUrl,siteName);//如果支持则用external方式加入收藏夹
                    }else if(window.sidebar){
                        window.sidebar.addPanel(siteName, siteUrl,'');//如果支持window.sidebar，则用下列方式加入收藏夹
                    }
                }
        //处理异常
                catch (e){
                    alert("加入收藏夹失败，请使用Ctrl+D快捷键进行添加操作!");
                }
        }





});