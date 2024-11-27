/*Este Archivo contiene el Bot de WhatsApp creado utilizando el lenguaje de programación Node JS*/
const fs = require('fs');

const { Client, MessageMedia} = require('whatsapp-web.js'); //Importo libreria de WhatsApp Web
const qrcode = require('qrcode-terminal'); //Esta linea de codigo dibuja el codigo QR en la pantalla

const SESSION_FILE_PATH = './session.json';  //Creo una constante para guaradar la session en un archivo
let client;
let sessionData; 

const numeroDestino1 = '573153626869';
const mensaje1 = 'Buenos dias, Ya estoy en Sitio';


const withSession = () => {

  console.log('Si existe el archivo Session JSON!');
  client.on('ready', () => {
    console.log('Client Listo!');
    });
    
}

/*Esta funcion genera el codigo QR*/
const withOutSession = () => {
    console.log('No tenemos session Guardada'); //Mostramos este mensaje en pantalla
    client = new Client();
    client.on('qr', qr => {
        qrcode.generate(qr, {small: true}); //Con esta linea generamos el codigo QR
});

client.on('authenticated', (session) => { 
    console.log('Cliente Autenticado!');
    listenMessage();
});



client.on('ready', () => { 
    console.log('Cliente esta Listo!');
    

    var express = require('express');
    var app = express();
      
    var date_time = new Date();
    console.log(date_time);// Muestra en pantalla la fecha y hora
       
      
    app.listen(3000);


//Enviar mensaje cuando el cliente esta listo
const chatId = `${numeroDestino1}@c.us`;
client.sendMessage(chatId, mensaje1).then(response => {
    console.log('Mensaje enviado: ', response);
    }).cath(err =>{
        console.error('Error al enviar mensaje: ', err);
    });
});

client.initialize();
}
   
/*Esta Funcion escucha los mensajes Nuevos*/
const listenMessage = () => {
    client.on('message', (msg) => {
        const {from, to, body} = msg;

    switch (body){

       
        case 'Menu':
        case 'menu':
            sendMessage(from, 'Menu Principal 🌎 Digita un Numero:')
            sendMessage(from, '1️⃣ ¿Donde Están Ubicados?')
            sendMessage(from, '2️⃣ Catálogo y Precios')
            sendMessage(from, '3️⃣ Garantia')
            sendMessage(from, '4️⃣ Medios de Pago')
            sendMessage(from, '5️⃣ Contactar un Asesor')
            sendMessage(from, '6️⃣ Rastrear Pedido')
            sendMessage(from, '0️⃣ Menu Principal')
             
            break;

        case '0':
            sendMessage(from, 'Menu Principal 🌎 Digita un Numero:')
            sendMessage(from, '1️⃣ ¿Donde Están Ubicados?')
            sendMessage(from, '2️⃣ Catálogo y Precios')
            sendMessage(from, '3️⃣ Garantia')
            sendMessage(from, '4️⃣ Medios de Pago')
            sendMessage(from, '5️⃣ Contactar un Asesor')
            sendMessage(from, '6️⃣ Rastrear Pedido')
            sendMessage(from, '0️⃣ Menu Principal')
             
            break;

        case '1':
            sendMessage(from, 'Estamos Ubicados en la Ciudad de Cali, Colombia.')
            sendMessage(from, '¿De que ciudad nos escribes tu?')
            break;

        case '2':
            sendMessage(from, '⭐️ Catalogo Digital ⭐')
            sendMessage(from, 'https://sites.google.com/view/mundomultimedia/')
            break;

        case '3':
            sendMessage(from, 'Todos Nuestros Productos Tienen Garantia, Envianos Foto de tu Factura para Iniciar el proceso de Garantia')
            break;

        case '4':
            sendMessage(from, 'Te Brindamos Los Siguientes Metodos de Pago:')
            sendMessage(from, '1. Transferencia Bancolombia')
            sendMessage(from, '2. NEQUI')
            
            break;

        case '5':
            sendMessage(from, 'Hola! Soy MARIA, ¿Como Puedo Ayudarte Hoy?')
            sendMessage(from, 'Menu Principal Digita 0️⃣')
            break;

        case '6':
            sendMessage(from, 'Puedes Rastrear tu pedido con tu numero de guia de envio')
            break;


        case 'Hola':
        case 'hola':
        case 'Ola':
        case 'ola':
        case 'Oe':
        case 'oe':
        case 'Hablame':
        case 'Hello':
        case 'hello':
            sendMessage(from, 'Hola!')
            break;
        case 'Gracias':
        case 'gracias':
            sendMessage(from, '¡Con gusto!')
            break;
        case 'Buenos dias':
        case 'buenos dias':
        case 'buen dia':
        case 'Buen dia': 
            sendMessage(from, 'Benos dias!')
            break;

        case 'Buenas tardes':
        case 'buenas tardes':
        case 'Buena tarde':
        case 'buena tarde': 
            sendMessage(from, 'Buena tarde!')
            break;

        case 'Buenas noches':
        case 'buenas noches':
        case 'noches':
        
                    sendMessage(from, 'Buenas noches!')
                    break;

        case 'Bryan':
        case 'bryan':
        case 'Samir':
        case 'samir':
            sendMessage(from, 'Nuestro creador se encuentra Desarrollando Nueva Tecnologia, Dejanos tu mensaje, Gracias!')
            break;

            
        case 'MARIA':
        case 'Maria':
        case 'maria':
            
                sendMessage(from, 'Hola! Soy MARIA - Inteligencia Artificial, ¿Como Puedo Ayudarte Hoy?')
                sendMessage(from, 'Menu Principal Digita 0️⃣')
                break;

        case '@Cali3Dprint':
                sendMessage(from, 'Cali3DPrint Somos una Empresa de Impresoras 3D')
                break;

        case '.':
                sendMessage(from, '.')
                break;

        case '?':
        case '??':
                sendMessage(from, 'Un momento por favor')
                sendMessage(from, '¿Como Podemos Ayudarte Hoy?')
                break;

        case '¿Sigue estando disponible este artículo? - https://www.facebook.com/marketplace/item/501687915828685/':
                sendMessage(from, 'Diadema Bluetooth con Orejas de Gato y luz = $ 39.990')
                break;
                
        case '¿Sigue estando disponible este artículo? - https://www.facebook.com/marketplace/item/1082056100103279/':
                sendMessage(from, 'Monitor Plano SAMSUNG FHD de 24 Pulgadas  =  $ 499.000')
                sendMedia(from, 'Samsung24.jpg')
               
                    break;

        case '¿Sigue estando disponible este artículo? - https://www.facebook.com/marketplace/item/1321213579261118/':
                sendMessage(from, 'Monitor Plano AOC FHD de 24 Pulgadas   =  $ 499.000')
                    break;
                

}

        console.log(from, to, body);
        //sendMessage(from, 'Hola Bro')
    })
}


/*esta funcion envia archivos multimedia*/
const sendMedia = (to, file) => {
   const mediaFile = MessageMedia.fromFilePath(`./mediaSend/${file}`)
   client.sendMessage(to, mediaFile)
}

/*esta funcion envia el mensaje*/
const sendMessage = (to, message) => {
    client.sendMessage(to, message)
}


(fs.existsSync(SESSION_FILE_PATH)) ? withSession() : withOutSession(); /*Condicion tenaria para verificar si la seccion esta iniciada o no*/
