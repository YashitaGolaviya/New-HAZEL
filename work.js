
function func() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone").value;
  let message = document.getElementById("pwd").value;
  let alpha = /^[A-Za-z\s]*$/;
  let at_position = email.indexOf("@");
  let dot_position = email.lastIndexOf(".");
  let phone_regx = /^\d{10}$/;
  if (name == "" || !name.match(alpha)) {
    alert("Enter valid name");
  } else if (at_position < 1 || dot_position - at_position < 2) {
    alert("Enter valid Email-ID");
  } else if (!phone_number.match(phone_regx)) {
    alert("Enter valid Phone number");
  } else if (message == "") {
    alert("Enter the password");
  } else {
    alert("successfully.......");
    window.location.reload(true);
  }
}
