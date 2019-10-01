class GuessingGame {
    constructor() {
        this.result = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.ceil((this.min + this.max) / 2);
        return this.result;
    }

    lower() {
        this.max = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
        this.min = Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
