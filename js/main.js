/**
 * Created by wangzhf on 2016/6/15.
 */

$(function(){
    //普通格式化
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
            var pre = $('<pre style="white-space: pre-wrap;">'+formatJson+'</pre>');
            $('#processed-json').append(pre);
        }
        if(error != null){
            var pre = $('<pre style="color: red; font-weight: bold;">'+error+'</pre>');
            $('#processed-json').append(pre);
        }
    });

    //highlight格式化
    $('#json-format-color').click(function(){
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
            var pre = $('<pre style=""><code class="json" id="code-content">'+formatJson+'</code></pre>');
            $('#processed-json').append(pre);
            $("#code-content").each(function(i, e){
                hljs.highlightBlock(e);
            });
        }
        if(error != null){
            var pre = $('<pre style="color: red; font-weight: bold;">'+error+'</pre>');
            $('#processed-json').append(pre);
        }
    });

    //tree格式化
    $('#json-format-tree').click(function(){
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
            var result = new JSONFormat(formatJson,4).toString();
            $('#processed-json').css('font-family', 'Consolas,"Courier New",monospace');
            $('#processed-json').html(result);
        }
        if(error != null){
            var pre = $('<pre style="color: red; font-weight: bold;">'+error+'</pre>');
            $('#processed-json').append(pre);
        }
    });

    //处理textarea和div的调整大小
    $('textarea.resizable:not(.processed)').TextAreaResizer();
    $('div.resizable:not(.processed)').TextAreaResizer();

    //navbar事件
    $('.dropdown-menu a').click(function(event){
        var ele = event.target;
        var tarId = $(ele).attr('tab-id');
        $('.nav-tabs a[href="#'+tarId+'"]').click();
    });

});

