/**
 * Created by wangzhf on 2016/6/18.
 */

$(function(){
    //普通格式化
    $("#xml-format-common").click(function(){
        $('#processed-xml').empty();
        var xml = $('#raw-xml').val();
        if(xml == ''){
            return;
        }
        var formatXML = null;
        var error = null;
        try{
            var ret = xmlTreeViewer.parseXML(xml);
            if(!ret.errMsg){
                var serializer =new XMLSerializer();
                formatXML = serializer.serializeToString(ret.xml);
            }else{
                error = ret.errMsg;
            }
        }catch (e){
            error = e.message;
        }
        if(formatXML != null){
            formatXML = vkbeautify.xml(xml, 4);
            formatXML = formatXML.replace(/</g, '&lt;');
            formatXML = formatXML.replace(/>/g, '&gt;');
            var pre = $('<pre style="white-space: pre-wrap;"></pre>');
            $('#processed-xml').append(pre);
            $('#processed-xml pre').append(formatXML);
        }
        if(error != null){
            var pre = $('<pre style="white-space: pre-wrap; color: red; font-weight: bold;">'+error+'</pre>');
            $('#processed-xml').append(pre);
        }
    });

    //highlight格式化
    $('#xml-format-color').click(function(){
        $('#processed-xml').empty();
        var xml = $('#raw-xml').val();
        if(xml == ''){
            return;
        }
        var formatXML = null;
        var error = null;
        try{
            var ret = xmlTreeViewer.parseXML(xml);
            if(!ret.errMsg){
                var serializer =new XMLSerializer();
                formatXML = serializer.serializeToString(ret.xml);
            }else{
                error = ret.errMsg;
            }
        }catch (e){
            error = e.message;
        }
        if(formatXML != null){
            formatXML = vkbeautify.xml(xml, 4);
            formatXML = formatXML.replace(/</g, '&lt;');
            formatXML = formatXML.replace(/>/g, '&gt;');
            var pre = $('<pre style="white-space: pre-wrap;"><code class="xml" id="code-content"></code></pre>');
            $('#processed-xml').append(pre);
            $('#processed-xml code').append(formatXML);
            $("#code-content").each(function(i, e){
                hljs.highlightBlock(e);
            });
        }
        if(error != null){
            var pre = $('<pre style="white-space: pre-wrap; color: red; font-weight: bold;">'+error+'</pre>');
            $('#processed-xml').append(pre);
        }
    });

    //tree格式化
    $('#xml-format-tree').click(function(){
        $('#processed-xml').empty();
        var xml = $('#raw-xml').val();
        if(xml == ''){
            return;
        }
        var formatXML = null;
        var error = null;
        try{
            var ret = xmlTreeViewer.parseXML(xml);
            if(!ret.errMsg){
                document.getElementById('processed-xml').appendChild(xmlTreeViewer.getXMLViewerNode(ret.xml));
            }else{
                error = ret.errMsg;
            }
        }catch (e){
            error = e.message;
        }
        if(error != null){
            var pre = $('<pre style="white-space: pre-wrap; color: red; font-weight: bold;">'+error+'</pre>');
            $('#processed-xml').append(pre);
        }
    });

});


