// script.js
//SecureToken :  "3ED7A7EF69D0D7F754502C310767C4734623",

const sendDoc = (email, text) => {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ryutaro.iwakami@autify.com",
    Password : "A3F34EFF51037A81BCB8DF9017F985843BA2",    
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
  const text = 'これはテストです。'
  
  console.log(email)
  console.log(corp_name)
  console.log(name)
  
  sendDoc(email,text)
}, false)
