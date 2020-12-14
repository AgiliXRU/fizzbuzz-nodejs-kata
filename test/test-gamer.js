const Gamer = require("../src/gamer.js");
const {expect} = require("chai");
require("mocha");

/**
 [✓] сказать само число
 [✓] сказать Happy на число 3
 [✓] сказать Happy на число 6
 [✓] сказать NewYear на число 5
 [✓] поменять число, делящаяся на 3 и 5 (15), на HappyNewYear
 */

describe("Игрок должен", () => {

    const gamer = new Gamer({3: "Happy", 5: "NewYear"});

    it("сказать само число", () => {
        expect(gamer.answers(1)).equals("1");
    });

    it("поменять 3 на Fizz", () => {
        expect(gamer.answers(3)).equals("Happy");
    });

    it("поменять число, делящаяся на 3, на Happy", () => {
        expect(gamer.answers(6)).equals("Happy");
    });

    it("поменять число, делящаяся на 5, на NewYear", () => {
        expect(gamer.answers(5)).equals("NewYear");
    });

    it("поменять число, делящаяся на 3 и 5, на HappyNewYear", () => {
        expect(gamer.answers(15)).equals("HappyNewYear");
    });

});