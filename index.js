const Game = require("./src/gamer");
const game = new Game();

for (let i = 1; i <= 100; i++) {
    console.log(game.answers(i));
}