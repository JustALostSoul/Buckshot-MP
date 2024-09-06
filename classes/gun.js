const Magazine = require("./magazine");

class Gun {
    constructor(){
        let createdMagazine = this.createMagazine();
        this.currentMagazine = new Magazine(createdMagazine.get('magazineSize'), createdMagazine.get('liveRounds'));
    }

    createMagazine(maxSize = 8, maxLiveRounds = 7){
        let magazineValues = new Map();
        magazineValues.set('magazineSize', Math.floor(Math.random() * maxSize));
        magazineValues.set('liveRounds', Math.floor(Math.random() * maxLiveRounds));
        return magazineValues;
    }
}

module.exports = Gun;