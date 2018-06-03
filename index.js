// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  return (Math.abs(someValue - 42));
}

function distanceFromHqInFeet (someValue) {
  return 264*distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, end) {
  return (Math.abs(start - end)*264);

}

function calculatesFarePrice(start, end) {
 let distance =distanceTravelledInFeet (start, end);

 if (distance > 2500) {
   return 'cannot travel that far';
 }else if (distance > 2000) {
   return 25;
 } else if (distance >400) {
   return (.02*(distance-400));
 }else {
   return 0;
 }

 }
