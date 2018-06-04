// Code your solution in this file!
function distanceFromHqInBlocks(d){
  let block;
  d >= 42 ? block = d - 42 : block = 42 - d;
  return block
}

function distanceFromHqInFeet(d){
  let dist;
  const bf = 264
  d >= 42 ? dist = (d-42)*bf : dist = (42-d)*bf;
  return dist;
}

function distanceTravelledInFeet(or, dest){
  let dist;
  const bf = 264;
  dist = Math.abs(or-dest)*264;
  return dist;
}

function calculatesFarePrice(or, dest){
  let dt = distanceTravelledInFeet(or, dest);
  let fare;
  if (dt <= 400) {
    fare = 0;
  } else if (400 < dt && dt < 2000){
    fare = (dt-400) *0.02;
  } else if (2000 <= dt && dt <= 2500){
    fare = 25;
  } else fare = 'cannot travel that far'
  return fare;
}
