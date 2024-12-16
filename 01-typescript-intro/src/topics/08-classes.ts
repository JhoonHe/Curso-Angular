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

