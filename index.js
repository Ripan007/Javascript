const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart();
};

maskCreditCard(999999999999);
