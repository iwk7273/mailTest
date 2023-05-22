// script.js
const sendDoc = (email, text) => {
  Email.send({
//    Host : "smtp.elasticemail.com",
//    Username : "ryutaro.iwakami@autify.com",
//    Password : "AC816398BB07C05350D1381F24AD95B73228",
    SecureToken: "640DFDA464F403974FA75432986BB5C8AE72",
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

  const text = 'これはテストです'
  console.log("mail sent")
  sendDoc(email,text)
}, false)
