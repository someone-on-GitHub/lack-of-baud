var arar = JSON.parse(localStorage['infinite-craft-data'])
arar.elements.push({text: 'Snickers', emoji: '🍬', discovered: false})
console.log(JSON.stringify(arar))
localStorage['infinite-craft-data'] = JSON.stringify(arar)