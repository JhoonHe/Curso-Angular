
function addNumbers(a: number, b: number): number {
    return a + b;
}

const result: number = addNumbers(1, 2);

// console.log({ result });

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const result2 = addNumbersArrow(1, 2);

// console.log({ result2 });

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const multiplyResult = multiply(1, 2);

// console.log({ multiplyResult });

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: '',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    },
}

healCharacter(strider, 50);

strider.showHp();

export { }