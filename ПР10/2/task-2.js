/*
function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
        ...this,
        isDomestic,
    };
}

const domesticDog = makeDomestic.bind(dog)(true);
console.log(domesticDog);
*/









/*
function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
        ...this,
        isDomestic,
    };
}

const domesticBird = makeDomestic.call(bird, false);
console.log(domesticBird);
*/















function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
        ...this,
        isDomestic,
    };
}

const domesticBird = makeDomestic.apply(bird, [true]);
console.log(domesticBird);