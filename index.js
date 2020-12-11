const Game = require("./src/gamer");
const game = new Game({3: "Fizz", 5: "Buzz"});

for (let i = 1; i <= 99; i++) {
    console.log(game.answers(i));
}