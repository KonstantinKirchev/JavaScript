function calcCylinderVol(arr) {
    var volume;
    volume = Math.PI * arr[0] * arr[0] * arr[1];
    console.log('The Cylinder volume is: ' + volume.toFixed(3));
}

calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);
