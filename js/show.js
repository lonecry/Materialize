/**
 * Created by lonecry on 15-8-1.
 */
//ҳ����سɹ���,json��ȡ
window.onload=function() {
    $.ajax({
        type: 'POST',
        url: 'http://192.168.0.114/note/findAllNote',
        dataType: 'json',
        error: function () {
            alert("AJAX�������.�������������ԣ�")
            //throw new Error('�������:' + xhr.status);
        },
        success: function (response) {
            //alert("���سɹ�")
            createTable(response);
        }
    })
};
//�������
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
                '<td  class="right-align">'+'<button data-target="modal2" class="btn modal-trigger" onclick="change('+ntype_id+')" >'+'�޸�'+'</button>'+'&nbsp;&nbsp;'+'<button id="'+ntype_id+'" class="btn  weas-effect" type="button"  onclick="del('+ntype_id+')">'+'ɾ��'+'</button>'+'</td>' +
                '</tr>');
        }
        $('tbody').html(tbody.join(''));
};
//ɾ����¼Ȼ��ˢ��ҳ��
var del  = function(ntype_id){
    var result=confirm("ȷ��ɾ����?");
    if(result==true) {
        var data = 'ntype_id=' + ntype_id;
        $.ajax({
            type: 'POST',
            url: 'http://192.168.0.114/note/delNoteType?',//url: 'http://192.168.0.114/note/delNoteType?ntype_id=5',
            data: data,
            error: function () {
                throw new Error('�������:' + xhr.status);
            },
            success: function (response) {
                window.location.reload();
            }
        })
    }
    else
    {}
};
//���֪ͨȻ��ˢ��ҳ��
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
                throw new Error('�������:' + xhr.status);
            },
            success: function (response) {
                alert("�� �� �� ����");
                window.location.reload();
            }
        })
    })
});
//�޸�֪ͨ
var change=function(ntype_id){
    var name=prompt("�������޸ĺ������","");
    if (name!=null && name!="")
    {
        data='ntype_id='+ntype_id+'&ntype_name='+name;
        //alert(data);
        $.ajax({
            type: 'POST',
            url: 'http://192.168.0.114/note/alterNoteType?',//url: 'http://192.168.0.114/note/delNoteType?ntype_id=5',
            data: data,
            error: function () {
               alert("�޸Ĳ��ɹ���")
               // throw new Error('�������:' + xhr.status);
            },
            success: function (response) {
                alert("�� �� �� ����");
                window.location.reload();
            }
        })
    }
}