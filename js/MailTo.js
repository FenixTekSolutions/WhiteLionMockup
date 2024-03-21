function Sub(){
    let emailBody = document.getElementById("message").value;
    emailBody = emailBody.replaceAll("\n", "%0D%0A");
    window.location.href="mailto:test@test.com?body=" + emailBody;
}