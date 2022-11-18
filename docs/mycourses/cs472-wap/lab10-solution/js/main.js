
"use strict";

import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

(function() {
   
    const people = [
        new Person("Ana Smith", new Date(1998, 11, 15)),
        new Person("Bob Jones", new Date(1945, 10, 16)),
        new Person("Carlos Slim Helu", new Date(1976, 8, 24))
    ];

  
    for(const person of people) {
        console.log(person.toString());
    }

    
    const ana = people[0];
    console.log(`Person1's name is: ${ana.name}, born on ${ana.dateOfBirth.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
    ana.name = "Anna Marie Roberts";
    console.log(`Person1's name has been updated to: ${ana.name}, born on ${ana.dateOfBirth.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
    console.log(ana.name);

 
    const empJimHanson = new Employee("Jim Hanson", null, 245990.00, null);
    empJimHanson.doJob("Software Engineer");
    empJimHanson.name = "Jim William Hanson";
    empJimHanson.doJob("Sr. Software Engineer");

})();