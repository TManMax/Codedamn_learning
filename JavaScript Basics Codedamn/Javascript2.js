function shoppingList(basket1,basket2,basket3,basket4) {
    var basket1 = "tomato, pasta, mushrooms"
    var basket2 = "milk, pear, drink, water"
    var basket3 = "dried onion, oranges, cake"
    var basket4 = "tomato ketchup, orange juice, sweet and sour sauce"
    console.log(`My current shopping list includes ${basket1}`)
    console.log(`My second shopping list includes ${basket2}`)
    console.log(`My third shopping list is for later but for now it includes ${basket3}`)
    console.log(`My fourth and final shopping list for the month includes ${basket4}`)
}
    
function addItems(item1,item2,item3) {
var item1 = "cous cous"
var item2 = "gravy cubs"
var item3 = "tea cakes"

if (item1 == "cous cous") {
    updateBasket = basket1 + item1
    console.log("Done")
}

else {
    console.log("Not done")
};
};

addItems()