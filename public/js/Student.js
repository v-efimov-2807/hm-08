import {Person} from "./Person.js";

export class Student extends Person{
    constructor(params) {
        super(params);
        this.course = params.course;
        this.type = "student";
    };

    get education() {
        return this.university + ", " + this.course + " курс";
    };
}