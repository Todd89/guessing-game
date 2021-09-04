class GuessingGame {

    min = 0;
    max = 0;
    number = 409;
    mid = 0;
    constructor() {

    }

    setRange(min, max) {

         this.min = min;
         this.max = max;
		console.log (min, max)

    }

    guess() {

        this.mid = Math.ceil ((this.min + this.max) / 2);
            return this.mid;
    }

    lower() {
        return  this.max = this.mid;
        
    }

    greater() {
      return  this.min = this.mid;

    }
}

module.exports = GuessingGame;
