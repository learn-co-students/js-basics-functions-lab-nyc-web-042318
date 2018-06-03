// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let distance;
  if (street > 42) {
    distance = street - 42;
  }
  else {
    distance = 42 - street;
  }
  return distance
}


function distanceFromHqInFeet(street) {
  let distance = distanceFromHqInBlocks(street) * 264
  return distance
}

function distanceTravelledInFeet(beginning, destination) {
  let distance;
  if (beginning > destination) {
    distance = beginning - destination
  }
  else {
    distance = destination - beginning
  }
    return distance * 264
}

function calculatesFarePrice(beginning, destination) {
  let distance = distanceTravelledInFeet(beginning, destination);
  let price;
  if (distance < 400) {
      price = 0;
    }
  else if (distance > 400 && distance < 2000) {
      price = (distance - 400) * 0.02;
    }
  else if (distance > 2000 && distance < 2500){
      price = 25;
    }
  else {
      return "cannot travel that far";
    }
  return price
}
