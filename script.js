//richiesta nome utente
let userName = prompt('Qual è il tuo nome?');

document.getElementById('user-name').innerHTML =userName;

console.log(userName);


//richiesta cognome utente
let userLastName = prompt('E il tuo cognome?');

document.getElementById('user-lastname').innerHTML =userLastName;

console.log(userLastName);


//richiesta colore preferito
let userFavColor = prompt('Mi diresti il tuo colore preferito?');

document.getElementById('user-fav-color').innerHTML =userFavColor;

console.log(userFavColor);


// generatore password
let password = 'Password suggerita: ' + userName + userLastName + userFavColor + '22';

document.getElementById('password').innerHTML = password;

console.log(password);