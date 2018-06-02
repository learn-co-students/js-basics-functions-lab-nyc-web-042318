// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  if (streetNumber >= 42) {
    return streetNumber - 42
  }
  else {
    return 42 - streetNumber
  }
}

function distanceFromHqInFeet(streetNumber) {
  blocks = distanceFromHqInBlocks(streetNumber)
  return blocks * 264

}

function distanceTravelledInFeet(startBlock, endBlock) {
  if (startBlock > endBlock) {
    blocksTravelled = startBlock - endBlock;
    return blocksTravelled * 264;
  } else {
    blocksTravelled = endBlock - startBlock;
    return blocksTravelled * 264;
  }
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance > 2500) {
    return "cannot travel that far";
  } else if (distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000) {
    return 25;
  }
}
