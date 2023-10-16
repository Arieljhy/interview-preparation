/**
 * ajax 局部网页更新
 */
function ajax (url , method , data = {}, callback){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 ){
            if(xhr.status === 200 || xhr.status === 304){
                callback.success(xhr.responseText);
            }else{
                callback.error(xhr.responseText);
            }
        } 
    }
    xhr.open(method,url);
    xhr.send();

}