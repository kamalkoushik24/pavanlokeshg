
function sendEmail(){

  var body = tinymce.activeEditor.getContent({format:'txt'});
  var content = "Name: "  + document.getElementById('Name').value  + '\n\n\n'+
  "From: " + document.getElementById('Email').value + '\r\r\r' +
  "Project Idea (or) Query: \r"+ body;
  
  message = "Your Query has been Submitted and will be reviewed.";
  Email.send({
    SecureToken :"974c6701-f3d3-49f8-ae97-be55779cd4d0",
    To : 'kamalkoushik234@gmail.com',
    From : 'gpavanlokeshnoreply@gmail.com',
    Subject : document.getElementById("Subject").value,
    Body : content
}).then(
  
  
  message => alert(message)
  
);
return false,
console.log(content);
document.getElementById("contact-form").reset();

}
