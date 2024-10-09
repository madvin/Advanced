const person = {
    name: "Kolyo",
    age: 22,
    height: 178
}

Object.defineProperty(person, 'name', { configurable: false, writable: true });

console.log(person.name);
