//In Bash
//npm install qrcode

//qecode

let QRCode = require("qrcode");

QRCode.toFile('./qr.png', 'Some text', {
  color: {
    dark: '#000000',  //Dark dots
    light: '#fff' // White background
  }
}, function (err) {
  if (err) throw err
  console.log('done')
})

//For More Visit: https://www.npmjs.com/package/qrcode
