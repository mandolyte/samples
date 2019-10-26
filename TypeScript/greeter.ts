function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
//let user = [0,1,2]; gives compile error below since it must be a string type

document.body.textContent = greeter(user);