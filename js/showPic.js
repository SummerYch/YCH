function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","../images/makeup.png");
    placeholder.setAttribute("alt","my iamge gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctxt = document.createTextNode("Choose an image.");
    description.appendChild(desctxt);
    // document.getElementsByTagName("body")[0].appendChild(placeholder);在body后面直接添加元素
    // document.getElementsByTagName("body")[0].appendChild(description);
    //把placeholder元素插入图片清单imagegallery前面
    var gallery = document.getElementById("imagegallery");
    // gallery.parentNode.insertBefore(placeholder,gallery);
    // gallery.parentNode.insertBefore(description,gallery);
    insertAfter(placeholder,gallery);
    insertAfter(description,gallery);
}
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return false;
    var source=whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getElementById("description"))
    {
        if(whichpic.getAttribute("title")){
            var text = whichpic.getAttribute("title");
        }else{
            var text = "";
        }
        var description = document.getElementById("description");
        description.firstChild.nodeValue = text;
    }
    return true;
}
// function  countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.childNodes.length);
// }

//把文档结构与行为分离，类似于css把样式与文档结构分离
//如果想把一个事件添加到某个带有特定id属性的元素上，用getElementById就可以解决问题，
//如果事情涉及到多个元素，我们就可以用getElementByTagName和getAttribute把事件添加到有着特定属性的一组元素上
//具体步骤如下

function prepareLinks(){
    if(!document.getElementsByTagName) return false;
    var links=document.getElementsByTagName("a");//1.把文档里的所有连接全放入一个数组里
    for(var i=1;i<links.length;i++){//2.遍历数组
        if(links[i].getAttribute("class")=="popup"){//3.如果某个链接的class属性等于popup，
                                                 // 就表示这个链接在被点击时应该被调用popup函数
                                               // 把这个链接的href属性值传递给popup函数
            links[i].onclick = function(){
                popup(this.getAttribute("href"));
                return false;//取消这个链接的默认行为，不让这个链接把访问者带离当前窗口
            }
        }
    }
}
function popup(winURL){
    window.open(winURL,"popup","width=380,height=200");
}

function prepareGallery(){
    if(!document.getElementsByTagName || !document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick = function(){
            showPic(this);
            // return !showPic(this);//
            return showPic(this)?false:true;//三元运算符，加入了一个判断，如果showpic存在就返回false
        }
    }

}
//编写insertAfter方法 ,在现有方法后面加入新元素,很有用的方法，可以写在自己的脚本里面
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChid(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);//在目标元素下一级元素的前面插入newElement.
    }

}

//页面加载时执行两个或多个函数
// window.onload = function(){
//     firstFunction();
//     secondFunction();
// }
//弹性更好的解决方案,很有用的函数，可以写在自己的脚本里面
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload !='function'){
        window.onload = func;
    }else {
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
addLoadEvent(prepareLinks);
addLoadEvent(preparePlaceholder);
