function sendEmail(){
  
  message = "Your Query has been Submitted and will be reviewed.";
  Email.send({
    SecureToken :"91bf5d7c-eb16-4431-8376-dda928109339",
    To : 'pavanlokeshnaiduguruju@gmail.com',
    From : document.getElementById("Email").value,
    Subject : document.getElementById("Subject").value,
    Body : document.getElementById("projdesc").value,
}).then(
  
 alert(message) 
 ,
  console.log(message)
  
);
}
tinymce.init({
  selector: '#mytextarea',
  plugins: [
    'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
    'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
    'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
  ],
  toolbar: 'undo redo | formatpainter casechange blocks | bold italic backcolor | ' +
    'alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help'
});