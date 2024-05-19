const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('you are not allowed to enter');
    } else {
        console.log('you are allowed to enter');
    }
};

checkBaggage('i have a knife ');
checkBaggage('i have  a gun');
