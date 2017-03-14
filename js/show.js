/**
 * Created by lonecry on 15-8-1.
 */
//页面加载成功后,json获取
window.onload=function() {
    $.ajax({
        type: 'POST',
        url: 'http://192.168.0.114/note/findAllNote',
        dataType: 'json',
        error: function () {
            alert("AJAX请求出错.请更换浏览器再试！")
            //throw new Error('错误代码:' + xhr.status);
        },
        success: function (response) {
            //alert("加载成功")
            createTable(response);
        }
    })
};
//创建表格
var createTable = function (json) {
        var list = json.length;
        var i = 0
        var tbody = [];
        for (i; i < list; i++) {
            var ntype_id = json[i].ntype_id;
            var ntype_name = json[i].ntype_name;
            tbody.push('<tr>'+
                '<td id="' + i + '" >' + ntype_id + '</td>' +
                '<td >' + ntype_name + '</td>' +
                '<td  class="right-align">'+'<button data-target="modal2" class="btn modal-trigger" onclick="change('+ntype_id+')" >'+'修改'+'</button>'+'&nbsp;&nbsp;'+'<button id="'+ntype_id+'" class="btn  weas-effect" type="button"  onclick="del('+ntype_id+')">'+'删除'+'</button>'+'</td>' +
                '</tr>');
        }
        $('tbody').html(tbody.join(''));
};
//删除记录然后刷新页面
var del  = function(ntype_id){
    var result=confirm("确定删除吗?");
    if(result==true) {
        var data = 'ntype_id=' + ntype_id;
        $.ajax({
            type: 'POST',
            url: 'http://192.168.0.114/note/delNoteType?',//url: 'http://192.168.0.114/note/delNoteType?ntype_id=5',
            data: data,
            error: function () {
                throw new Error('错误代码:' + xhr.status);
            },
            success: function (response) {
                window.location.reload();
            }
        })
    }
    else
    {}
};
//添加通知然后刷新页面
$(document).ready(function(){
    $('.modal-trigger').leanModal();
    $("#addconfirm").click(function(){
        var text=$("#ntype_name").val();
        var data= 'ntype_name=' +text;
        //alert(data)
        $.ajax({
            type: 'POST',
            url: 'http://192.168.0.114/note/addNoteType?',//url: 'http://192.168.0.114/note/delNoteType?ntype_id=5',
            data: data,
            error: function () {
                throw new Error('错误代码:' + xhr.status);
            },
            success: function (response) {
                alert("添 加 成 功！");
                window.location.reload();
            }
        })
    })
});
//修改通知
var change=function(ntype_id){
    var name=prompt("请输入修改后的内容","");
    if (name!=null && name!="")
    {
        data='ntype_id='+ntype_id+'&ntype_name='+name;
        //alert(data);
        $.ajax({
            type: 'POST',
            url: 'http://192.168.0.114/note/alterNoteType?',//url: 'http://192.168.0.114/note/delNoteType?ntype_id=5',
            data: data,
            error: function () {
               alert("修改不成功！")
               // throw new Error('错误代码:' + xhr.status);
            },
            success: function (response) {
                alert("修 改 成 功！");
                window.location.reload();
            }
        })
    }
}