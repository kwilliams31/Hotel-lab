// 
// checkbox 
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("submitButton");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  
// input value from submit bar
  var el = document.getElementById("submitButton");

// click event on that element, run named f/n
el.addEventListener("click", displayuserEmail);

function displayuserEmail() {
  // grab the value of the user input
  var elName = document.getElementById("userEmail");
  //do something with it
// need to put info somewhere??
}
