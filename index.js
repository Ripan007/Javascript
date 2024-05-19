const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, 'xxxx');
};

console.log(maskCreditCard(999999999999));
