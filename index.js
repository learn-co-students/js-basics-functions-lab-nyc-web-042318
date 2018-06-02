// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  if (someValue > 42) {
    return someValue - 42;
  } else if (someValue < 42) {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (startingBlock, endingBlock) {
  //it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long
  let numberOfBlocks;
  if (startingBlock > endingBlock) {
    numberOfBlocks = startingBlock - endingBlock
  } else if (endingBlock > startingBlock) {
    numberOfBlocks = endingBlock - startingBlock
  }
  return numberOfBlocks * 264;
}

function calculatesFarePrice (startingBlock, endingBlock) {
  let numFeet = distanceTravelledInFeet (startingBlock, endingBlock);
  // Given the same starting and ending block as the previous test (hint hint),
  //return the fare for the customer. The first four hundred feet are free.
  //For a distance between 400 and 2000 feet, the price is 2 cents per foot
  //(not including 400, which are free!).
  //Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
  //Finally, Scuber does not allow any rides over 2500 feet
  //- the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

  if (numFeet < 400) {
    return 0;
  } else if (400 < numFeet && numFeet <= 2000) {
    return (numFeet - 400) * 0.02;
  } else if (2000 < numFeet && numFeet < 2500) {
    return 25;
  } else if (numFeet > 2500) {
    return 'cannot travel that far';
  }
}
