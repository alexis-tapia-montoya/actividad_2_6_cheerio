# actividad 2.6: exploracion de javascript en backend con express y cheerio

# el objetivo del proyecto fue desarrollar una aplicacion backend utilizando la arquitectura de software estructurada por capas definidas por rutas controladores y ser en node.js y express el sistema integra a la libreria cheerio para realizar un web scraping dinamico sobre una URL remota parseando su HTML en el servidor para retornar una estructura de datos JSON que deberia verse limpia y normalizada

## la estructura de la arquitectura por capas en el proyecto se organiza bajo los principio de separacion de responsabilidades garantizado un codigo que sea mantenible y escalable
* el src/services/ integra una capa encargada por las peticiones de HTTP externa como lo son axios y la manipulacion de datos del DOM con cheerio
* con src/controllers/ es la capa encargada de la gestion del fluno de la peticion aplicando las validaciones de entrada y estructurando las respuestas del HTTP
* el src/routes/ es la capa de ruteo que expone los endpoints del API
* src/app.js e el punto de entrada del servidor express

# para instalar esto debe y poder replicarlos en un entorno de desarrollo local debe ejecutar los siguientes comandos en su terminal

```bash
npm install