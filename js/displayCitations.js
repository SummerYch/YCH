function displayCitations() {
    if(!document.getElementsByTagName|| !document.createElement||!document.createTextNode) return false;
    var quotes = document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        if(!quotes[i].getAttribute("cite")) continue;
        var cite = quotes[i].getAttribute("cite");
        var quoteChild = quotes[i].getElementsByTagName("*");
        if(quoteChild.length<1) continue;
        var elem = quoteChild[quoteChild.length-1];
        var link=document.createElement("a");
        var link_text=document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",cite);
        var superscript=document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);