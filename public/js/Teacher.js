import {Person} from "./Person.js";

export class Teacher extends Person {
    constructor(params) {
        super(params);
        this.type = "teacher";
    }

    get education() {
        return this.university + ", " + "Преподаватель";
    };
}