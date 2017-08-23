function displayAbbreviation(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;

    var abbr = document.getElementsByTagName("abbr");
    if(abbr.length<1) return false;
    var defs = Array();
    for(var i = 0;i<abbr.length;i++){
        var current_abbr = abbr[i];
        if(current_abbr.childNodes.length<1) continue;//为解决IE浏览器不承认abbr标签的问题，当abbr子节点个数为0（IE浏览器讲abbr的子节点个数返回0）时继续执行代码
        var definition = current_abbr.getAttribute("title");//abbr的title值
        var key = abbr[i].lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for(key in defs){    //对于关联数组defs里的每个键，把他的值赋给变量key
        var definition = defs[key];
        var dtitle = document.createElement("dt");//创建元素dt
        var dtitle_text=document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");//创建元素dd
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length<1) return false;//在IE浏览器中，由于defs列表为空，所以dlist不存在子节点，此时返回false，
                                                   //这违背了函数只能有一个出口的原则，但这是解决IE浏览器问题而又不需要改进代码最简单的办法了
    var header = document.createElement("h2");
    var header_text = document.createTextNode("abbr");
    header.appendChild(header_text);
    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(dlist);
}
addLoadEvent(displayAbbreviation);