// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    if (num < 42) {
        return 42 - num
    } else {
        return num - 42
    }
}

function distanceFromHqInFeet(num) {
    return result = distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(origin, destination) {
    if ((origin - destination) < 0  ){
      return (destination - origin) * 264
    } else if (true) {
      return (origin - destination) * 264

    }
}

function calculatesFarePrice(origin, destination) {
  const ride = distanceTravelledInFeet(origin, destination);
  if (ride <= 400) {
    return 0;
  } else if (ride < 2000) {
    return ((ride - 400) * 0.02);
  } else if (ride > 2000 && ride < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}