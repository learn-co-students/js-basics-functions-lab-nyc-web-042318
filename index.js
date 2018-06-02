// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  distance = someValue - 42;
  if (distance < 0) {
    distance = distance * -1;
  }
  return distance;
}


function distanceFromHqInFeet(someValue) {
  distance = someValue - 42;
  if (distance < 0) {
    distance = distance * -1;
  }
  distance = distance * 264;
  return distance;
}

function distanceTravelledInFeet(from_destination, location) {
  if (location > from_destination) {
    distance = (location - from_destination) * 264;
  } else {
    distance = (location - from_destination) * 264;
    distance = distance * -1;
  }
  return distance;
}

function calculatesFarePrice(start, destination) {
  if (destination > start) {
    value = (destination - start) * 264;
  } else if (start > destination) {
    value = (destination - start) * 264;
    value = value * -1;
  }
  if (value <= 400) {
    return 0;
  } else if (value > 400 && value <= 2000) {
    return ((value - 400) * 0.02);
  } else if (value > 2000 && value < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
