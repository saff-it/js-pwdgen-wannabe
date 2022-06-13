
//richiesta nome utente
const userName = prompt('Qual è il tuo nome?');

document.getElementById('user-name').innerHTML =userName;

console.log(userName);


//richiesta cognome utente
const userLastName = prompt('E il tuo cognome?');

document.getElementById('user-lastname').innerHTML =userLastName;

console.log(userLastName);


//richiesta colore preferito
const userFavColor = prompt('Mi diresti il tuo colore preferito?');

document.getElementById('user-fav-color').innerHTML =userFavColor;

console.log(userFavColor);


// generatore password
const password = 
    `Password suggerita: 
    ${userName}
    ${userLastName}
    ${userFavColor}
    ${(100 - 78)}`
;

// const password = 'Password suggerita: ' + userName + userLastName + userFavColor + (100 - 78);

document.getElementById('password').innerHTML = password;

password = 10;

console.log(password);


