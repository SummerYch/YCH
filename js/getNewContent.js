function getNewContent(){
    var request = getHTTPObject();//如果浏览器不支持XMLHttpRequest对象，getHTTPObject
                                    //会返回false。

    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange = function(){
            if(request.readyState == 4){            //服务器在向XMLHttpRequest对象发回响应时，该对象有许多属性可用，
                                                     //浏览器会在不同阶段更新readyState的值，它有五个可能的值01234
                                                     //只要readyState的属性值变为4，那么就可以访问服务器发送回来的数据了
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);//访问服务器发送回来的数据要通过两个属性完成，一个是
                                                                         //responseText，这个属性用于保存文本字符串形式的数据，另一个是responseXML属性，用于保存
                                                                         //Content-Type头部中指定为“text/xml的数据，其实是一个DocumentFragment对象。”
                para.appendChild(txt);
                var newdiv = document.getElementById('new');
                newdiv.appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert("sorry,your browser doesn/'t support XMLHttprequest");
    }

}
addLoadEvent(getNewContent);
