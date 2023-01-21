

import fetch from "node-fetch";

fetch('https://swapi.dev/api/people/1')
.then(response => response.json())
.then(data => console.log(data.name))

// ENTENDER PORQUé EN ESTE CASO CORRIENDOLO EN NODE, ES NECESARIO UTILIZAR EL .MJS