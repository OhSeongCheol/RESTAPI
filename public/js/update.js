var my_update = function() {
    inputString1 = prompt('Input Old Item Name', 'Sample String'); 
    inputString2 = prompt('Input New Item Name', 'Sample String'); 

    var json = {
      oldItem: inputString1,
      newItem: inputString2
    }

    var xhr = new XMLHttpRequest();
    //xhr.open('POST','http://127.0.0.1:3000/json/3');
    //xhr.open('POST','http://203.242.35.31:3000/json/3');
    xhr.open('POST',URL +'json/3');

    xhr.setRequestHeader('Content-type', "application/json");
    xhr.send(JSON.stringify(json));

  }