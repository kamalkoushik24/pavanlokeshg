const { default: tinymce } = require("tinymce");

function sendEmail(){

  tinymce.init({
    selector: '#projdesc',
    height: 400,
    width: 500,
    plugins: [
      'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
      'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
      'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
    ],
    toolbar: 'undo redo | formatpainter casechange blocks | bold italic backcolor | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
  });
  
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
