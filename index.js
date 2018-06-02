// Code your solution in this file!
function distanceFromHqInBlocks(feet) {
  return Math.abs(42 - feet)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(x, y) {
  return Math.abs(x - y) * 264
}

function calculatesFarePrice(start, destination) {
  a = distanceTravelledInFeet(start, destination) / 264
  if (a < 1.1) {
    return 0
  } else if (a*264 > 2500) {
    return 'cannot travel that far'
  } else if (a*264 > 2000) {
    return 25
  } else if (a*264 > 400) {
    return ((a * 264)-400) * 0.02
  }
}
