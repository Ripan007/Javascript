const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const heyGreet = greet('hi');
heyGreet('mohit');
