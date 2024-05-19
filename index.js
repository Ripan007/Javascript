const email = 'jonas@gmail.io';
const loginEmail = '    Jonas@gmail.Io \n ';

const correctEmail = loginEmail.toLocaleLowerCase().trim();

console.log(email === correctEmail);
