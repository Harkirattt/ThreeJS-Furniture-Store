let submit = document.getElementById("submit");
let alertSuccess = document.getElementById("alertSuccess")
let form = document.getElementById("form1")

function addSuccessAlert(){
    alertSuccess.style.display="block";
    setTimeout(alertRemover,5000);
  }
  
  function alertRemover()
{
    alertSuccess.style.display="none";
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addSuccessAlert();
})