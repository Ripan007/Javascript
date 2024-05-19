const capitalizeName = function (name) {
    const names = name.split(' ');
    const nameUpper = [];
    for (const n of names) {
        nameUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(nameUpper.join(' '));
};

capitalizeName('jessica and smith devis');
capitalizeName('jonas schmedman');
