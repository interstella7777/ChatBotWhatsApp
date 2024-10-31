/*Este Archivo contiene el Bot de WhatsApp creado utilizando el lenguaje de cprogramación Node JS*/
const { client } = require('whatsapp-web.js'); //Importo libreria de WhatsApp
const qrcode = require('qrdode-terminal');
const client = new Client();

const withOutSession = () => {
    console.log('No tenemos session Guardada'); //Mostramos este mensaje en pantalla
    client = new Client();
    client.on('qr', qr, {small: true}); //Con esta funcion generamos el codigo QR
});


/*esta funcion */
client.on('authenticated', (session) => {
//Guardamos credenciales de session para usar luego
  sessionData = session;
  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(), (err) => {
      if (err) {
          console.log(err);
      }
    });
  });

/*Condicion tenaria para verificar si la seccion esta iniciada o no*/
