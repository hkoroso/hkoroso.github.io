/**
 * lan9.js
 */
  "use strict"

// question1
const person = {
    name: "",
    dateOfBirth: null,
    getName: function() {
        return this.name; 
    },
    setName: function(newName) {
        this.name = newName;
    }
};
const john = Object.create(person);
john.setName("John");
john.dateOfBirth = new Date(1998, 11, 10);
console.log(`The person's name is ${john.getName()}\n${john.getName()} was born on ${new Intl.DateTimeFormat().format(john.dateOfBirth)}`);
// question 2

const employee = Object.create(person);
 employee.salary = 0.0;
 employee.hireDate = new Date();
 employee.doJob = function(jobTitle) {
console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
 };
 const anna = Object.create(employee);
 anna.setName("Anna");
 anna.salary = 249995.50;
 anna.doJob("Programmer");

 // question 3
 function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}

const peter = new Person("Peter", new Date(1985,10, 10));
Person.prototype.toString = function() {
        return `{Name: ${this.name}, DateOfBirth: ${new Intl.DateTimeFormat().format(this.dateOfBirth)}}`;
};
console.log(peter.toString());
const john2 = new Person("John", new Date(2001, 8, 21));
console.log(john2.toString());
