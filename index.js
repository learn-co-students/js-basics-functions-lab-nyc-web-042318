// Code your solution in this file!
function distanceFromHqInBlocks(input) {
  const dist =  input - 42 ;
    if (dist > 0 ){
      return dist
    }
    else if (dist < 0) {
      return dist * -1
    }
};

function distanceFromHqInFeet(input){
  return  distanceFromHqInBlocks(input) * 264
};

function distanceTravelledInFeet(start, end) {
  const dist =  start - end ;
    if (dist > 0 ){
      return dist * 264
    }
    else if (dist < 0) {
      return dist * -264
    }
};

function calculatesFarePrice(start, destination) {

  distance = distanceTravelledInFeet(start, destination);

  if (distance < 400) {
    return 0
  }
  else if (distance < 2000) {
    return (distance - 400) * .02
  }
  else if (distance <= 2500) {
      return 25
  }
  else  {
      return 'cannot travel that far'
 }
};
