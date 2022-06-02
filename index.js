const { default: tinymce } = require("tinymce");

function sendEmail(){

  
  
  message = "Your Query has been Submitted and will be reviewed.";
  Email.send({
    SecureToken :" 3d955485-a74d-4f2f-b386-748dee39f4ca",
    To : 'pavanlokeshnaiduguruju@gmail.com',
    From : document.getElementById("Email").value,
    Subject : document.getElementById("Subject").value,
    Body : tinymce.activeEditor.getContent(),
}).then(
  
  message => alert(message)
  
);
}
