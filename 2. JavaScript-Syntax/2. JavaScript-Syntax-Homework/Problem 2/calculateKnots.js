function kmh2knots(km){
    var knots = km * 0.539957;
    console.log(km + ' km/h is ' + knots.toFixed(2) + ' knots');
}

kmh2knots(20);
kmh2knots(112);
kmh2knots(400);
