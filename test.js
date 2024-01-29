//Importar la función sum del archivo app.js

const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

//Comienza tu primera prueba+

test('suma 14 y 9 3 iguala 23', () => {
    let total = sum(14,9);
    //Esperamos que la suma de estos números
expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146,26 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromDollarToYen(3.5);

    // Si 1 dollar son 146,26 yenes, entonces 3.5 dolares deben ser (3.5 * 146,26)
    const expected = 3.5 * 146.26;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(511.92); // 1 dollar son 146,26 yenes, entonces 3.5 dolares deben ser (3.5 * 146,26)
})

test("One pound should be 179,88 yens", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromYenToPound(3.5);

    // Si 1 pound son 179,88 yenes, entonces 100 yenes deben ser (100/156,6 * 0,87) pounds
    const expected = 100 / 156.6 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(100)).toBe(0.56); // 1 pound son 179,88 yenes, entonces 100 yenes deben ser (100/156,6 * 0,87) pounds
})

