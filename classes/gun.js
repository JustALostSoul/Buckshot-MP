const Magazine = require("./magazine");

class Gun {
    constructor(maxSize = 8, maxLiveRounds = 7, exactValues = false){
        if(exactValues = true) {
            this.currentMagazine = new Magazine(maxSize, maxLiveRounds);
        } else {
            let size = this.getRandomIntInclusive(1, maxSize);
            let liveRounds = this.getRandomIntInclusive(1, maxLiveRounds);
            this.currentMagazine = new Magazine(maxSize, maxLiveRounds);
        }
    }

    getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    shoot(target){
        let shell = this.currentMagazine.Shells.shift();
        if(shell.live){
            target.damage(1);
        }
    }
}

module.exports = Gun;