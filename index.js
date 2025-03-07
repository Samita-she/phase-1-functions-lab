// Scuber HQ is on 42nd Street
const headquarters = 42;

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - headquarters);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

// Function to calculate feet traveled between two locations
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for 2000-2500 feet
    } else {
        return 'cannot travel that far'; // Over 2500 feet is not allowed
    }
}
