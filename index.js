function distanceFromHqInBlocks(streetName) {
    if (streetName < 42) {
        return (42 - streetName); 
    }
      else {
        return(streetName-42);
    }
}

function distanceFromHqInFeet(streetName) {
   return distanceFromHqInBlocks(streetName)*264; 
}

function distanceTravelledInFeet(a,b) {
    if (a>b) {
        return (a-b)*264;
    }
    else {return (b-a)*264;
}
}

function calculatesFarePrice(a,b) {
    let feetTravelled = distanceTravelledInFeet(a,b)
    if (feetTravelled < 400) {
        return 0;
    }

    if (feetTravelled >= 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    }

    if (feetTravelled >= 2000 && feetTravelled <= 2500) {
        return 25;
    }
    if (feetTravelled >2500) {
        return 'cannot travel that far'}

}