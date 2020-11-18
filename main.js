
if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.querySelector('#file-js input[type=file]').addEventListener('change', setconfigson, false);
  
} else {
  // alert('The File APIs are not fully supported in this browser.');
}

  var evet;
  var heightI;
  var widthI;

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
        document.getElementById('mycanvas').setAttribute("style", "background:url('data:image/png;base64,"+base64String+"'); background-position: center; background-size: cover;");
        // document.getElementById('base64').value = base64String;
        document.getElementById("mycanvas").style.setProperty("display", "block");
        var image = new Image();
        myimgsrc = "data:image/png;base64,"+base64String+"";
        image.src = myimgsrc;
        image.onload = function () {
          heightI = image.height;
          widthI = image.width;
          mycanvas.width = widthI;
          mycanvas.height = heightI;

          //Drawing on the Image
          ctx.fillStyle = 'rgba(50, 54, 51, 07)';
          ctx.fillRect(0,0, widthI,(heightI/100 * 25));

        }

      
        

        
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
  }
    
    


  