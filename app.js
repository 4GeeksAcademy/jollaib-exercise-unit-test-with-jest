const sum = (a,b) => {
    return a + b;
}

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    let dollar = euro * 1.07; 
    return dollar; 
}

const fromDollarToYen = (dollar) => {
    let yen = (dollar/oneEuroIs.USD) * oneEuroIs.JPY;
    let roundedYen = Number(yen.toFixed(2));
    return roundedYen;  
    console.log(fromDollarToYen(3.5));

}

const fromYenToPound = (yen) => {
    let pound = (yen/oneEuroIs.JPY) * oneEuroIs.GBP; 
    let roundedPound = Number(pound.toFixed(2));
    return roundedPound;
}



console.log(sum(7,3));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};