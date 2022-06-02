
function sendEmail(){

  var body = tinymce.activeEditor.getContent({format:'txt'})
  
  message = "Your Query has been Submitted and will be reviewed.";
  Email.send({
    SecureToken :"974c6701-f3d3-49f8-ae97-be55779cd4d0",
    To : 'pavanlokeshnaiduguruju@gmail.com',
    From : document.getElementById("Email").value,
    Subject : document.getElementById("Subject").value,
    Body : body
}).then(
  
  message => alert(message)
  
);
}
