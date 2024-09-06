const Magazine = require("./magazine");

class Gun {
    constructor(maxSize = 8, maxLiveRounds = 7, exactValues = false){
        let createdMagazine = this.createMagazine(maxSize, maxLiveRounds, exactValues);
        this.currentMagazine = new Magazine(createdMagazine.get('magazineSize'), createdMagazine.get('liveRounds'));
    }

    createMagazine(maxSize, maxLiveRounds, exactValues){
        let magazineValues = new Map();
        if(exactValues){
            magazineValues.set('magazineSize', maxSize);
            magazineValues.set('liveRounds', maxLiveRounds);
        } else {
            magazineValues.set('magazineSize', Math.floor(Math.random() * maxSize));
            magazineValues.set('liveRounds', Math.floor(Math.random() * maxLiveRounds));
        }
        return magazineValues;
    }

    shoot(target){
        let shell = this.currentMagazine.Shells.shift();
        if(shell.live){
            target.damage(1);
        }
    }
}

module.exports = Gun;