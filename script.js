// script.js


const sendDoc = (email, text) => {
  Email.send({
    SecureToken : "050A4F73A2A5109D34DCB77BFA1E01545312A4B13F334A898B2D86130B8DD0330FB51FB72AD2A68E31F13A552C356495",
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
             + '資料請求ありがとうございます。<br><br><br>'
             + '========================<br>'
             + '　株式会社〇〇<br>'
             + '　〒100-0001　東京都千代田区千代田1-1<br>'
             + '========================'
  console.log("mail sent")
  sendDoc(email,text)
}, false)
