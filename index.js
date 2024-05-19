document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);
    for (const row of rows) {
        const [first, second] = row.toLowerCase().trim().split('_');
    }
});
