function getHTTPObject(){
    if(typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function(){
            try{
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }catch (e){}
            try{
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }catch (e){}
            try{
                return new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e){}
            return false;
        }
//测试浏览器是不是支持XMLHttpRequest对象
    }
    return new XMLHttpRequest();
}