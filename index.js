const capitalizeName = function (name) {
    const names = name.split(' ');
    const nameUpper = [];

    for (let n of names) {
        // nameUpper.push(n[0].toUpperCase() + n.slice(1));\
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(nameUpper.join(' '));
};

capitalizeName('ripan is awesome');
