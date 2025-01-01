# ChatBotWhatsApp

Chatbot creado con NodeJS y Whatsapp-web.js

¿Que es Whatsapp-web.js?
Es una API(application programming interface) y libreria que permite conectarse a WhatsApp a traves de un navegador web simulado con Puppeteer internamente.

¿Como funciona?
La libreria internamente utiliza un navegador web a nivel de codigo para conectarse a los servidores propios de WhatsApp, genera un codigo QR el cual es leido por la aplicacion de celular, una vez conectada puede escuchar mensajes y dar una respuesta automatica.

Instalación:
1. Utiliza un editor de codigo ejemplo Visual Studio Code
2. Instala NodeJS en el PC, puedes descargarlo desde la pagina oficial: https://nodejs.org
3. Instala la Libreria de WhatsApp-web.js. Ejecuta el siguiente comando en la consola: npm i whatsapp-web.js
4. Instala la Libreria para dibujar el codigo QR en la consola y poder escanearlo con la camara del celular. Ejecuta el siguiente comando en la consola: npm i qrcode-terminal
