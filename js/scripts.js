//----------------------User Interface Logic-------------------------//
//constructors
function Order() {
  this.pizzas = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}
// above is for ordering multiple pizzas. worry about that last.
function Pizza(size) {
  this.size = size;
  this.toppings = [];
  this.price = 10;

}

function Topping() {
  this.name = name;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}
//functions
function startPizza(size) {
  var pizza = new Pizza(size);
  console.log(pizza);
  return pizza
  // will need to add to order
}
function addToppingChoice(topping) {
  var pizza = new Pizza(18);
  pizza.addTopping(topping);
}
function calculatePrice(pizza) {

}
function displayPurchase() {

}

//----------------------User Interface Logic-------------------------//

$(document).ready(function(){

  $('#startPizzaBtn').click(function() {
    var newPizza = startPizza();
    $('button').click(function(newPizza) {
      addToppingChoice(newPizza, "peporoni");
      console.log("here");
    });
  });
});
