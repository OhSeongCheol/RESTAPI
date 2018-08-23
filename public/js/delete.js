var my_delete = function() {
    inputString = prompt('Input created Item Name', 'Sample String'); 

    var json = {
      contents: inputString
    }

    var xhr = new XMLHttpRequest();
    //xhr.open('POST','http://127.0.0.1:3000/json/4');
    //xhr.open('POST','http://203.242.35.31:3000/json/4');
    xhr.open('POST',URL +'json/4');

    xhr.setRequestHeader('Content-type', "application/json");
    xhr.send(JSON.stringify(json));

  }