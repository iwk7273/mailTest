// script.js
//SecureToken :  "748A5A9D774BDB70D0E81BDF39EABBA5CCF8616B8425C5257702452E3079985ABB998B52F858896A235306D6A8E9E295",
//Host : "smtp.elasticemail.com",
//Username : "ryutaro.iwakami@autify.com",
//Password : "A3F34EFF51037A81BCB8DF9017F985843BA2",   

const sendDoc = (email, text) => {
  Email.send({
    SecureToken : "748A5A9D774BDB70D0E81BDF39EABBA5CCF8616B8425C5257702452E3079985ABB998B52F858896A235306D6A8E9E295",   
    To : email,
    From : "ryutaro.iwakami@autify.com",
    Subject : "資料請求",
    Body : text
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
  
  console.log(corp_name)
  console.log(name)
  console.log(email)
  
  sendDoc(email,text)
}, false)
