
if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.querySelector('#file-js input[type=file]').addEventListener('change', setconfigson, false);
  
} else {
  // alert('The File APIs are not fully supported in this browser.');
}

  var evet;

  function setconfigson(evt){

   evet = evt
   var menu = document.getElementById("menu");
   menu.style.setProperty('display', 'block');
   
  }

  function EditImage(){

    var mycanvas = document.getElementById("mycanvas");
    var ctx = mycanvas.getContext("2d");
    var f = evet.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        //showing file converted to base64
        document.getElementById('img').setAttribute("src", "data:image/png;base64,"+base64String+"");
        // document.getElementById('base64').value = base64String;
        document.getElementById("mycanvas").setAttribute("display", "block");
        
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
  }
    
    


  