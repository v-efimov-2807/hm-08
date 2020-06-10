import {Student} from "./Student.js";
import {Teacher} from "./Teacher.js";

export class PersonFactory {
    constructor(params) {
        switch(params.type) {
            case "student":
                return new Student(params);
            case "teacher":
                return new Teacher(params);
            default:
                return new Person(params);
        };
    };
}