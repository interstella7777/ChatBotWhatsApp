/*Este Archivo contiene el Bot de WhatsApp creado utilizando el lenguaje de programación Node JS*/
const { client } = require('whatsapp-web.js'); //Importo libreria de WhatsApp Web
const qrcode = require('qrdode-terminal'); //Esta linea de codigo dibuja el codigo QR en la pantalla
const client = new Client(); //Creamos el cliente

const withOutSession = () => {
    console.log('No tenemos session Guardada'); //Mostramos este mensaje en pantalla
    client = new Client();
    client.on('qr', qr, {small: true}); //Con esta funcion generamos el codigo QR
});


/*esta funcion genera el codigo QR*/
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
