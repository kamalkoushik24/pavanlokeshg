function sendEmail(){
  
  message = "Your Query has been Submitted and will be reviewed.";
  Email.send({
    SecureToken :"91bf5d7c-eb16-4431-8376-dda928109339",
    To : 'pavanlokeshnaiduguruju@gmail.com',
    From : document.getElementById("Email").value,
    Subject : document.getElementById("Subject").value,
    Body : document.getElementById("projdesc").value,
}).then(
  
  message => alert(message)
);
}