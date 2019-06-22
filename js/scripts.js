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
function addToppingChoice(pizza, topping) {
  pizza.addTopping(topping);
  $("#" + topping).show();


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
  $("#size").text(pizza.size + "inch Pizza")
  for (var i = 0; i < pizza.toppings.length; i++) {
    $("#toppings").text(pizza.toppings[i] + ", ")
  }
  $("#price").text('costing: ' + pizza.price + '$')

}

//----------------------User Interface Logic-------------------------//

$(document).ready(function(){
  $('#startOrder').click(function() {
    $('.hiddenBody').show();
  });
  $('#startPizzaBtn').click(function() {
    var newPizza = startPizza($('#sizeVal').val());
    $('.toppings').show();

    $('.topping').click(function() {
        var topping = $(this).val();
        $(this).hide();
        addToppingChoice(newPizza, topping);
        console.log(newPizza.toppings);
    });

    $('#output').click(function() {
        calculatePrice(newPizza);
        displayPurchase(newPizza);
        console.log(newPizza.toppings);
        $('#output').hide();
    });
  });
});
