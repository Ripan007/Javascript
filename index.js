document.body.append(document.createElement('textarea'));
document.body.append((document.createElement('button').textContent = 'click'));

const text = document.querySelector('textarea').value;
console.log(text);
