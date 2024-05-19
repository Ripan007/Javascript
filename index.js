const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join();
};

// higher order functions

const transformer = function (str, fn) {
    console.log(`original string : ${str}`);
    console.log(`transformed string ${fn(str)}`);
    console.log('');
};
