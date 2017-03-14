$(function(){

        $.ajax({
            type: 'POST',
            url: 'http://192.168.0.114/note/findAllNote',
            data: data,
            dataType: 'json',
            error: function (xhr) {
                throw new Error('错误代码:' + xhr.status);
            },
            success: function (response) {
                createPagination(response);
                createTable(response);
            }
        });

   var createTable = function (json) {
        var list = json.list;
        var tbody = [];
        for (var i = 1; i <= list.length; i++) {
            var ntype_id = list[i - 1].ntype_id;
            var ntype_name = list[i - 1].ntype_name;
            tbody.push('<tr>' +
            '<td id="ntype_id' + i + '" class="user-id">' + device_id + '</td>' +
            '<td id="ntype_name' + i + '">' + htest_time + '</td></tr>');
        }
        $('tbody').empty();
        $('tbody').html(tbody.join(''));
    };
});