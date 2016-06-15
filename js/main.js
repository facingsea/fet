/**
 * Created by wangzhf on 2016/6/15.
 */

$(function(){
    $("#json-format-common").click(function(){
        $('#processed-json').empty();
        var json = $('#raw-json').val();
        if(json == ''){
            return;
        }
        var formatJson = null;
        var error = null;
        try{
            formatJson = vkbeautify.json(json, 4);
        }catch (e){
            error = e.message;
        }
        if(formatJson != null){
            var pre = $('<pre style="width: 100%; height: 90%;">'+formatJson+'</pre>');
            $('#processed-json').append(pre);
        }
        if(error != null){
            var pre = $('<pre style="color: red; font-weight: bold; width: 100%; height: 90%;">'+error+'</pre>');
            $('#processed-json').append(pre);
        }
    });
    $('textarea.resizable:not(.processed)').TextAreaResizer();
    $('div.resizable:not(.processed)').TextAreaResizer();
});

