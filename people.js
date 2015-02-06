var Person = function() {

};

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

var bob = new Person();
bob.firstName = "Bob";
bob.lastName = "Smith";
