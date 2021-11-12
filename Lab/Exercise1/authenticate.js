function authenticate(){
  var input = document.getElementById('UserInput');
  var confirmInput = document.getElementById('confirmUserInput');


  if(input.value != confirmInput.value )
  {
    alert("ERROR! Passwords do not match!");
  }
  else{
    if(input.value.length >= 8  && confirmInput.value.length >= 8)
    {
      alert("Password created successfully!");
    }
    else{
      alert("ERROR! Password must be at least 8 characters");
    }

  }

}
