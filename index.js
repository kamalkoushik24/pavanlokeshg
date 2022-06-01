function sendEmail(){
  
  message = "Your Query has been Submitted and will be reviewed.";
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "gpavanlokeshnoreplygmail.com",
    Password : "9F7345FE6EB7CFE92181828AA639196E0A63",
    To : 'pavanlokeshnaiduguruju@gmail.com',
    From : document.getElementById("Email").value,
    Subject : document.getElementById("Subject").value,
    Body : document.getElementById("projdesc").value,
}).then(
  
  message => alert(message)
);
}