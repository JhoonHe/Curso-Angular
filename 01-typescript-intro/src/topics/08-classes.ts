export class Person {
    public name?: string;
    public address?: string;
    private secretString?: string;

    constructor(name: string, address?: string) {
        this.name = name;
        this.address = address;
        this.secretString = "Hello world";
    }
}

const person_one = new Person('Jhon', 'NY');
const person_two = new Person('Ana');

const { name, address } = person_one;
const { name: _name, } = person_two;

console.log({ name, address });
console.log(_name);

class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName, 'New York');
    }
}

const tony = new Person('Tony Stark', 'New York');
const hero = new Hero('Ironman', 45, 'Tony', tony);

console.log(hero);
