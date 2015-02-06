var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
};

var sue = new Person('Sue', 'Sylvester');
var peter = new Person('Peter', 'Pan');
console.log(sue.fullName());
console.log(peter.fullName());
