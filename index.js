// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  if (num < 42) {
    return 42 - num
  } else {
    return num - 42
  }
}


function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num) * 264;
}


function distanceTravelledInFeet(start, end) {
    if ((start - end) < 0  ){
      return (end - start) * 264
    } else if (true) {
      return (start - end) * 264

    }
}

function calculatesFarePrice(start, destination) {
  const ride = distanceTravelledInFeet(start, destination);
  if (ride <= 400) {
    return 0;
  } else if (ride > 400 && ride < 2000) {
    return ((ride - 400) * 0.02);
  } else if (ride > 2000 && ride < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
