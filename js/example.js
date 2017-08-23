window.onload = function () {
    // var testdiv = document.getElementById("testdiv");
    // testdiv.innerHTML="<p>This is my inserted content.</p>";

    // var para = document.createElement("p");
    // var testdiv = document.getElementById("testdiv");
    // testdiv.appendChild(para);//用appendChild方法，将p节点插入到id为testdiv的元素节点之下，成为其子节点
    // var txt = document.createTextNode("hello world");
    // para.appendChild(txt);
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is");
    para.appendChild(txt1);
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode(" my ");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    var txt3 = document.createTextNode(" content.");
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}