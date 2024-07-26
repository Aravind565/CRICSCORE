function login() {
	var email = document.getElementById("form1Example13").value;
	var password = document.getElementById("form1Example23").value;
	if (email == "example@gmail.com" && password == "password123") {
		window.location.href = "Crscore.html"; 
	}
  else if( email == "" && password == "")
{
  document.getElementById("message").innerHTML = "⚠Enter your email and Password";
  }
  else if(password == "")
{
  document.getElementById("message").innerHTML = "⚠Enter your Password";
  }
  else if(email == "")
{
  document.getElementById("message").innerHTML = "⚠Enter your Email";
  }
  else if(email != "example@gmail.com" && password != "password123")
  {
		document.getElementById("message").innerHTML = "⚠Incorrect email or password.";
	}
  else if(email == "example@gmail.com" || password != "password123")
  {
		document.getElementById("message").innerHTML = "⚠Incorrect email or password.";
	}
  else if(email != "example@gmail.com" || password == "password123")
  {
		document.getElementById("message").innerHTML = "⚠Incorrect email or password.";
	}
}