interface Person {
    firstName: string;
    lastName: string;
}

function greeteri(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let useri = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeteri(useri);