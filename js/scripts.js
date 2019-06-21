//----------------------User Interface Logic-------------------------//
//constructors
function Order() {
  this.pizzas = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}
// above is for ordering multiple pizzas. worry about that last.
function Pizza() {
  this.size = size;
  this.toppings = [];

}

function Topping() {
  this.name = name;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
}
//functions
function startPizza() {
  return pizza = New Pizza
  // will need to add to order
}
function addToppingChoice() {

}
function calculatePrice() {

}
function displayPurchase() {

}

//----------------------User Interface Logic-------------------------//

$(document).ready(function(){
  $('#startPizzaBtn').click(function() {
    startPizza();
  });
});
