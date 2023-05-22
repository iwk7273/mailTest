// script.js
const sendDoc = (email, text) => {
  Email.send({
    SecureToken: "3ED7A7EF69D0D7F754502C310767C4734623",
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
  
  console.log("mail sent")
  sendDoc(email,text)
}, false)
