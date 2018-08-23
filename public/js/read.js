
  var my_read = function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          document.getElementById("status").innerHTML=xhr.status;

        if (xhr.status === 200) {
          items = xhr.responseText
          document.getElementById("p1").innerHTML=items;
        } else {
          alert('request에 뭔가 문제가 있어요.');
        }
      }
    };
    xhr.open('GET',URL +'json/2');
    
    xhr.send();
  }
