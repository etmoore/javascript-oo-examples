var car = {
  runs: true,
  wheels: 4,
};

var jeep = Object.create(car);
jeep.tough = true;
jeep.wheels = 5;

var geoTracker = Object.create(jeep);



var Person = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

var sue = Object.create(Person);
sue.firstName = 'Sue';
sue.lastName = 'Sylvester';

console.log(sue.fullName());


var will = Object.create(Person);
will.firstName = 'Will';
will.lastName = 'Schuester';
