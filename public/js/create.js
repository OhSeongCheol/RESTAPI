var my_create = function() {
    inputString = prompt('Input created Item Name', 'Sample String'); 

    var json = {
      contents: inputString
    }

    var data = {
        id: "",
        task: inputString,
        flow: "",
        x: "",
        y: "",
        time: "",
      }
    var xhr = new XMLHttpRequest();
    var createURL=URL+'json/1';
    var Method='POST';

    xhr.open("POST","http://127.0.0.1:3000/json/1");
    xhr.setRequestHeader('Content-type', "application/json");
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE){
          document.getElementById("url").innerHTML=createURL;
          document.getElementById("status").innerHTML=xhr.status;
        }
    }
  }