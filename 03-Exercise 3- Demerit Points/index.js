// Write a function that takes 1 parameter as speed, 
// If speed is 70 it will return "ok".
// If speed greater than speed limit than every 5 km it will add 1 points.
// And after 12 points License will be Suspended.

function checkSpeed(speed) {
    const speedLimit = 70;
    const perKm = 5;
    const suspendedPoints = 12;
    if(speed <= speedLimit + perKm) {
        console.log("Ok");
        return;
    }
    const points = Math.floor((speed - speedLimit) / perKm);
    if(points >= suspendedPoints) {
        console.log("License Suspended..")
    } else {
        console.log("Points", points);
    }
}

checkSpeed(130);