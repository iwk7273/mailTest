// script.js
//https://www.smtpjs.com/
//https://app.elasticemail.com/marketing/settings/new/manage-smtp

const sendDoc = (email, text) => {
  Email.send({
    SecureToken : "a35b2a58-343b-4cc1-8dcf-bb744996d61e",   
    To : email,
    From : "ryutaro.iwakami@autify.com",
    Subject : "資料請求",
    Body : text,
  }).then(
    message => alert(message)
  );
}

const btn = document.getElementById('send_Doc');

btn.addEventListener('click', function() {
  const email = document.getElementById("email").value
  const corp_name = document.getElementById("corp_name").value
  const name = document.getElementById("name").value
  const text = corp_name + '　' +  name + '様<br>'
  console.log(email)
  
  sendDoc(email,text)
}, false)
