// clave de themoviedb API.2023
// API KEY 94cd0919045936987eb36de68d9b0242

import fetch from "node-fetch";

fetch('https://swapi.dev/api/people/1')
.then(response => response.json())
.then(data => console.log(data.name))

// ENTENDER PORQUé EN ESTE CASO CORRIENDOLO EN NODE, ES NECESARIO UTILIZAR EL .MJS