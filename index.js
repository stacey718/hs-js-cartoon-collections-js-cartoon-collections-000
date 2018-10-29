function dwarfRollCall(dwarves) {
    var seven = [];
  for (let i = 0; i < dwarves.length; i++) {
    seven.push(`${[i+1]}. ${dwarves[i]} `);
  }
  return seven.join('')
}

function summonCaptainPlanet(planeteerCalls) {
  var five = planeteerCalls.map(element => element.toUpperCase() + '!')
return five 
}

function longPlaneteerCalls(words) {
  if (words.length > 4) {
    return true
  }
  else {
    return false
  }
}

function findTheCheese (foods) {
  if (foods.includes('cheddar')) {
    return 'cheddar'
  }
  else {
    return 'no cheese!'
  }
}
