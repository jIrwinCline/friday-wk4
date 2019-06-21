//----------------------User Interface Logic-------------------------//

//constructors
function Order() {
  this.pizzas = [];
}

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}
// above is for ordering multiple pizzas. worry about that last.
//---------------------------------------------------------------
//constructors
function Pizza(size) {
  this.size = 18; //change to dynamic
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
function addToppingChoice(pizza, topping) {
  pizza.addTopping(topping);
}
function calculatePrice(pizza) {
  if (pizza.size > 18) {
    pizza.price += 2;
  } else if (pizza.size < 18){
    pizza.price -= 2;
  }
  for (var i = 0; i < pizza.toppings.length; i++) {
    pizza.price += 1;
  }
}
function displayPurchase(pizza) {
  $("#size").append(pizza.size + "inch Pizza")
  for (var i = 0; i < pizza.toppings.length; i++) {
    $("#toppings").append(pizza.topping + ", ")
  }
  $("#price").append('costing: ' + pizza.price + '$')

}

//----------------------User Interface Logic-------------------------//

$(document).ready(function(){
  $('#startPizzaBtn').click(function() {
    var newPizza = startPizza();

    $('.topping').click(function() {
        var topping = $(this).val();
        addToppingChoice(newPizza, topping);
        console.log(newPizza.toppings);
    });

    $('#output').click(function() {
        calculatePrice(newPizza);
        displayPurchase(newPizza);
        console.log(newPizza.toppings);
    });
  });
});
