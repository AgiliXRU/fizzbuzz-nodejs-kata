class Gamer {

    replacement = {};

    constructor(replacement) {
        this.replacement = replacement;
    }

    answers(number) {
        let result = "";

        Object.keys(this.replacement).forEach(
            key => result += ((number % key === 0) ? this.replacement[key] : "")
        )

        if (result === "") {
            result = number.toString();
        }

        return result;
    }
}

module.exports = Gamer;
