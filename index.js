console.log('test start');
setTimeout(() => {
    console.log('0 second timer');
}, 0);
Promise.resolve('resolved promise 1').then(res => console.log(res));
console.log('test end');
