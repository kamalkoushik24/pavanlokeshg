
function sendEmail(){

  var body = tinymce.activeEditor.getContent({format:'txt'})
  
  message = "Your Query has been Submitted and will be reviewed.";
 
  Email.send({
    SecureToken :"974c6701-f3d3-49f8-ae97-be55779cd4d0",
    To : 'kamalkoushik234@gmail.com',
    From : 'gpavanlokeshnoreply@gmail.com',
    Subject : document.getElementById("Subject").value,
    Body : 
    'Name: ' + document.getElementById('Name').value + '\n\n' +
    'From: ' + document.getElementById('Email').value + '\n\n\n' +
    'Project Idea (or) Query: \n'+ body
}).then(
  
  
  message => alert(message)
  
);


}
