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

  drawMilesHealth()

}

// // THIS IF STATEMENT IS UGLY
// if(hasHealthPotion){
//   heroHealth += 50
//   hasHealthPotion = false
// }else{
//   return alert('No potion 🍼')
// }


function attackMiles(){
  console.log('ummm did it work??????')
  let amount = Math.floor(Math.random() * 10) 
  console.log('amount', amount)

  if(amount == 0){
    return alert('Swing and Miss 🏓')
  }
  
  heroHealth -= amount
  console.log('currentHealth', heroHealth)


  // there is a big todo..... 
  // we need to update the screen
  drawMilesHealth()
}


function drawMilesHealth(){

  // if(heroHealth > 0){
  //   heroHealth
  // }else{
  //   '☠️☠️☠️'
  // }


  document.getElementById('miles-health').textContent = `${heroHealth > 0 ? heroHealth : '☠️☠️☠️'}`
}

