// Code your solutions in this file
function writeCards(arrNames, eventName){
    let cards = []
    for (let i = 0; i < arrNames.length; i++) {
        cards.push(`Thank you, ${arrNames[i]}, for the wonderful ${eventName} gift!`)
        } 
        return cards   
}


function countDown (posInt) {
 while (posInt >= 0) {
     console.log(posInt)
     posInt--
 }
}