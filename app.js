let heroName = 'Sir Miles of Kilometer'
let heroHealth = 100
let hasHealthPotion = false


function shouldMilesDrinkAPotion() {
  // 🎁📦 Lets bundle this package for later

  if (heroHealth >= 100) {
    // 📝 alerts are not graceful... more on this later
    return alert('You have to0 much health')
  }

  if (!hasHealthPotion) {
    return alert('No potion 🍼')
  }

  heroHealth += 50
  hasHealthPotion = false

  if (heroHealth > 100) {
    heroHealth = 100
  }

}

// // THIS IF STATEMENT IS UGLY
// if(hasHealthPotion){
//   heroHealth += 50
//   hasHealthPotion = false
// }else{
//   return alert('No potion 🍼')
// }