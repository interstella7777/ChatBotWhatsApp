/*Este Archivo contiene el Bot de WhatsApp creado utilizando el lenguaje de cprogramación Node JS*/

cont 

client = new Client();

client.on 


/*esta funcion */
client.on('authenticated', (session) => {
//Guardamos credenciales de session para usar luego
  sessionData = session;
  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(), (err) => {
      if (err) {
          console.log(err);
      }
    }
  
}

/*Condicion tenaria para verificar si la seccion esta iniciada o no*/
