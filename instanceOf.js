var Vehicle = function(type) {
  this.type = type;
}

var car = new Vehicle(car);
console.log(car instanceof Vehicle);
// -> true
