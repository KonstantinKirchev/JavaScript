function solve(array){
    var arr, route, luggageWeight, typeOfFuel, totalFuelConsumption,
        baseFuel, fuelConsumption, normalRoad, snowyRoad,
        extraSnowConsumption, extra, carModel;

    for (var i in array) {
        arr = array[i].split(' ');
        carModel = arr[0];
        typeOfFuel = arr[1];
        route = arr[2];
        luggageWeight = Number(arr[3]);

        if (typeOfFuel == 'gas') {
            fuelConsumption = 12;
        }else if (typeOfFuel == 'petrol') {
            fuelConsumption = 10;
        }else if (typeOfFuel == 'diesel') {
            fuelConsumption = 8;
        }

        var extraFuelConsumption = luggageWeight * 0.01;

        if (route=='1') {
            normalRoad = 100;
            snowyRoad = 10;
            baseFuel = extraFuelConsumption + fuelConsumption;
            totalFuelConsumption = 110 * (baseFuel / 100);
            extraSnowConsumption = 0.3 * baseFuel;
            extra = 10 * (extraSnowConsumption / 100);
        }else{
            normalRoad = 65;
            snowyRoad = 30;
            baseFuel = extraFuelConsumption + fuelConsumption;
            totalFuelConsumption = 95 * (baseFuel / 100);
            extraSnowConsumption = 0.3 * baseFuel;
            extra = 30 * (extraSnowConsumption / 100);
        }

        var total = Math.round(totalFuelConsumption + extra);
        var output = carModel+' '+typeOfFuel+' '+route+' '+total;
        console.log(output);
    }
}
solve(['BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54']
);
