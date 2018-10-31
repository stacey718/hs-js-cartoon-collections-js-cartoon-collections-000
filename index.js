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

function findTheCheese(foods) {
  if (foods.includes('cheddar')) {
    return 'cheddar'
  }
  else if (foods.includes('gouda')) {
  return 'gouda'
  }
  else {
    return 'no cheese!'
  }
}
function wordsWithB(words) {
  var wordsb = [];
  for (var i = 0; i < words.length; i++) {
    var bIndex = words[i].startsWith("b");
    if (bIndex === true) {
      wordsb.push(words[i])
    }
  }
  return wordsb
}
