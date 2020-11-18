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
      mycanvas.width = 500;
      mycanvas.height = 900;
      //Top and Bottom Images
      document.getElementById('mycanvas').setAttribute("style", "background:url('https://static.bhphoto.com/images/images2000x2000/1292836852_579261.jpg'); background-position: center; background-size: cover;");
      //Shadow
      ctx.fillStyle = grd;
      ctx.fillRect(245, 260, 250, 35);
      // Create gradient
      var grd = ctx.createLinearGradient(0,0,500,0);
      grd.addColorStop(0, "#00c6fb");
      grd.addColorStop(1, "#005bea");

      // Fill with gradient
      ctx.fillStyle = grd;
      ctx.fillRect(245, 260, 250, 35);
      ctx.fillStyle = "white";
      ctx.font = "20px Lobster";
      ctx.fillText(document.getElementById("modelo").value, 257, 285);
    
      var imagelogo = new Image();
          imagelogo.src = 'moto.png';
          imagelogo.onload = function () {

            ctx.drawImage(imagelogo, 3, 12, 300, 100);
            
          }  
        

      // Fill with gradient - Valor
      ctx.fillStyle = grd;
      ctx.fillRect(6, 665, 185, 35);
      ctx.fillStyle = "white";
      ctx.font = "20px Lobster";
      var valor = document.getElementById("valor").value;
      var preco = "R$ "+valor+"";
      ctx.fillText("Valor |"+preco, 9, 688);
      var imagezap = new Image();
          imagezap.src = 'zaplogo.png';
          imagezap.onload = function () {

            ctx.drawImage(imagezap, 9, 720, 35, 35);
          
          }

      // Write the Phone Number;
      ctx.fillStyle = "white";
      ctx.font = "20px Lobster";
      ctx.fillText("[47] 99632-6325 | Nome : Leandro", 50, 743);
      

      reader.onload = (function(theFile) {
        return function(e) {
          var binaryData = e.target.result;
          //Converting Binary Data to base 64
          var base64String = window.btoa(binaryData);
          //showing file converted to base64
          //document.getElementById('mycanvas').setAttribute("style", "background:url('data:image/png;base64,"+base64String+"'); background-position: center; background-size: cover;");
          // document.getElementById('base64').value = base64String;
          document.getElementById("mycanvas").style.setProperty("display", "block");
          var image = new Image();
          myimgsrc = "data:image/png;base64,"+base64String+"";
          image.src = myimgsrc;
          image.onload = function () {

            ctx.drawImage(image, 0, 300, 500, 350);
            
          }  
        };
        

        
      })(f);
      
      // Read in the image file as a data URL.
      reader.readAsBinaryString(f);
      if(window.navigator.msSaveBlob){

        window.navigator.msSaveBlob(mycanvas.msToBlob(), "ImagemEdita.png")

      } else{

        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = mycanvas.toDataURL();
        a.download = "ImagemEdita.png"
        a.click();
        
      }
    }
      
      
  
  
    