
"use strict";

export class Person {
    
    #name = "";
    #dateOfBirth = null;
     constructor(name, dateOfBirth) {
        this.#name = name;
        this.#dateOfBirth = dateOfBirth;
    }
    get name() { return this.#name; }
    get dateOfBirth() { return this.#dateOfBirth; }

    set name(value) {
        this.#name = value;
    }
    set dateOfBirth(value) {
        this.#dateOfBirth = value;
    }

    toString() {
        return `{Name: ${this.#name}, DateOfBirth: ${this.#dateOfBirth.getFullYear()}-${this.#dateOfBirth.getMonth()+1}-${this.#dateOfBirth.getDate()}}`;
    }
}