var Car = function(make, model) {
  this.make = make;
  this.model = model;
};

Car.prototype.description = function() {
  return this.make + " " + this.model;
};

var mustang = new Car('Ford', 'Mustang');
console.log(mustang.description());
