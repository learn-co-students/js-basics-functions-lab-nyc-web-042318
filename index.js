// Code your solution in this file!

function distanceFromHqInBlocks (blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    blocksTravelled = start - end;
    return blocksTravelled * 264;
  } else {
    blocksTravelled = end - start;
    return blocksTravelled * 264;
  }
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start, end);
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
