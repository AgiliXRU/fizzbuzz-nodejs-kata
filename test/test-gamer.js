const Gamer = require("../src/gamer.js");
const {expect} = require("chai");
require("mocha");

describe("Игрок должен", () => {

    const gamer = new Gamer({3: "Fizz", 5: "Buzz"});

    it("сказать само число", () => {
        expect(gamer.answers(1)).is.equals("1");
    });

    it("поменять 3 на Fizz", () => {
        expect(gamer.answers(3)).is.equals("Fizz");
    });

    it("поменять число, делящаяся на 3, на Fizz", () => {
        expect(gamer.answers(6)).is.equals("Fizz");
    });

    it("поменять число, делящаяся на 5, на Buzz", () => {
        expect(gamer.answers(5)).is.equals("Buzz");
    });

    it("поменять число, делящаяся на 3 и 5, на FizzBuzz", () => {
        expect(gamer.answers(15)).is.equals("FizzBuzz");
    });

});