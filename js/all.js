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

    //����ѡ��
    $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    //������������
    $('input#input_text, textarea#textarea1').characterCounter();
    // Initialize collapse button


    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();

    // ������������
    $(".dropdown-button").dropdown();

    //������
   /* $('#search').click(function(){
            $(this).addClass("white");
    })*/
    //����ͼ

    // Pause slider
       // $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');

    //MODAL ��ʼ��
    $('.modal-trigger').leanModal();

    //�Ӳ����
    $('.parallax').parallax();

    //ͼ��
    $('.tabs-wrapper .row').pushpin();

    //scrofile ���
    var options = [
        {selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
        {selector: '#staggered-test', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
        {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
        {selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")' }
    ];
    Materialize.scrollFire(options);
    $('.scrollspy').scrollSpy();


    //tabs ������
    //$('ul.tabs').tabs();
    $('ul.tabs').tabs('select_tab', 'tab_id');

    //��������ղؼк���
    var join_favorite=function (siteUrl, siteName){
        //��������ղع����е��쳣
                try{
                    //�ж�������Ƿ�֧��document.all
                    if(document.all){
                        window.external.addFavorite(siteUrl,siteName);//���֧������external��ʽ�����ղؼ�
                    }else if(window.sidebar){
                        window.sidebar.addPanel(siteName, siteUrl,'');//���֧��window.sidebar���������з�ʽ�����ղؼ�
                    }
                }
        //�����쳣
                catch (e){
                    alert("�����ղؼ�ʧ�ܣ���ʹ��Ctrl+D��ݼ�������Ӳ���!");
                }
        }





});