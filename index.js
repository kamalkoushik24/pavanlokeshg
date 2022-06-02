
function sendEmail(){

  var body = tinymce.activeEditor.getContent({format:'txt'})
  
  message = "Your Query has been Submitted and will be reviewed.";
  Email.send({
    SecureToken :" 3d955485-a74d-4f2f-b386-748dee39f4ca",
    To : 'pavanlokeshnaiduguruju@gmail.com',
    From : document.getElementById("Email").value,
    Subject : document.getElementById("Subject").value,
    Body : body
}).then(
  
  message => alert(message)
  
);
}
