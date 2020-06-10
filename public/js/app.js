import { PersonFactory } from "./PersonFactory.js";
import { personArr } from "./personArr.js";
import { School } from "./School.js";
import { Header } from "./Header.js";

const header = new Header();
header.mount(document.body);

let school = new School();

personArr.forEach((item) => {
    school.enrollPerson(item);
});

school.mount();
