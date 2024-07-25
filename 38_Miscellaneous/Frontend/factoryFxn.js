function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hii!, I  am ${this.name}`);
        },
    }
    return person;
}

console.log(PersonMaker("Sachin Kumar", 21));
//This is a factory function.