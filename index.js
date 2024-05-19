const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

greet('hi')('mohit');
