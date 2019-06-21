//----------------------User Interface Logic-------------------------//

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

//----------------------User Interface Logic-------------------------//

$(document).ready(function(){

})
