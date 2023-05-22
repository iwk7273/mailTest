// script.js
const sendDoc = (email, text) => {
  Email.send({
//    Host : "smtp.elasticemail.com",
//    Username : "ryutaro.iwakami@autify.com",
//    Password : "AC816398BB07C05350D1381F24AD95B73228",
    SecureToken: "2866D913A74BCDAB8F9491BF7A0400C99753",
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
  console.log("mail sent")
  sendDoc(email,text)
}, false)
