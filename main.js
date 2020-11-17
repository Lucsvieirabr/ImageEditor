
 // Check for the File API support.
 if (window.File && window.FileReader && window.FileList && window.Blob) {
    
    setconfigson();
    
  } else {
    // alert('The File APIs are not fully supported in this browser.');
  }


  function setconfigson(){

   document.getElementsByClassName("menu").style.display="block";


  }