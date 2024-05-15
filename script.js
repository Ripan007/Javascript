console.log('test start')
setTimeout(() => console.log('0 second timer'), 0)
Promise.resolve('resolved promised 1').then(res => console.log(res))
Promise.resolve('resolved primised 2').then(res => {
    for (let i = 0; i < 10000000; i++) {
        console.log(res)
    }
})
