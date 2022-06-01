function sendEmail(){
  
  message = "Your Query has been Submitted and will be reviewed.";
  Email.send({
    Host : "smtp.gmail.com",
    Username : "pavanlokeshnoreplygmail.com",
    Password : "pavan@123",
    To : 'pavanlokeshnaiduguruju@gmail.com',
    From : document.getElementById("Email").value,
    Subject : document.getElementById("Subject").value,
    Body : document.getElementById("projdesc").value,
}).then(
  
  message => alert(message)
);
}