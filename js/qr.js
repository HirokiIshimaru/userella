QRCode.toDataURL("https://bhb.co.jp/", function(err, dataurl) {
  if (err) {
    alert(err.message);
    return;
  }
  console.log("result:", dataurl);
  document.getElementById('qrcode').setAttribute("src", dataurl);
});