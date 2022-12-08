function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "password") {
    location.replace("mainpage.html");
  } else {
    alert("login failed");
  }
}


