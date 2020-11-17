
if (window.File && window.FileReader && window.FileList && window.Blob) {
  document.querySelector('#file-js input[type=file]').addEventListener('change', setconfigson, false);
  
} else {
  // alert('The File APIs are not fully supported in this browser.');
}



  function setconfigson(){

   var menu = document.getElementById("menu");
   menu.style.setProperty('display', 'block');
   
  }

  function EditImage(){

    var IMAGE = document.getElementsByClassName("file-input");
    


  }