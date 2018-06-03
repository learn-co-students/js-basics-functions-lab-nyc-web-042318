// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else if (block < 42) {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start >= end) {
    return ((start - end) * 264);
  } else {
    return ((end - start) * 264);
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
