//西南大学
function loadXinan(){
    var page = 1;
    $.getJSON('http://121.42.151.165/web/ckinfo/json/XNZF1',{uni:uni,page:page},function(json){
        if(json != null){
            for(var i= 0;i<json.length;i++){
                console.log(json[i].title);
                loadXinanInfo(json[i]);
            }
        }
    });
}
function loadXinanInfo(data){
    var uni = GetQueryString('uni');
    $.ajax({
        url:"http://121.42.151.165:8080",
        data:{uni:uni,id:data.id},
        type:'GET',
        dataType:'text',
        success:function(form_data){
            var link = form_data;
            $('.collection').append(function(){
                var str = "<li>"+
                    "<a href=\""+link+"\" class=\"collection-item blue-text lighten-4\">" +
                    "<div class=\"listInfo\">"+
                    "<div class=\"title\">"+data.title+"</div>" +
                    "<div class=\"info\">" +
                    "<span class=\"detail\">点击查看详情>></span>" +
                    "</div>" +
                    "</div>" +
                    "</a>" +
                    "</li>";
                return str;
            })

        },
        error:function(){
            alert('加载失败');
        }
    });
}