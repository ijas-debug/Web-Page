/*let input=document.getElementById('email')
         

input.onblur=function(){
  if(!input.value.includes("@")){
    input.classList.add("invalid")
    alert("Please enter a valid Email address")              
  }
}*/

const input = document.getElementById('email');
const errorMessage = document.getElementById('email-error');

input.onblur = function() {
    if (!input.value.includes("@")) {
        input.classList.add("invalid");
        errorMessage.textContent = "Please enter a valid email address";
        errorMessage.style.display = "block"; // Show the error message
    } else {
        input.classList.remove("invalid");
        errorMessage.textContent = ""; // Clear the error message
        errorMessage.style.display = "none"; // Hide the error message
    }
};
