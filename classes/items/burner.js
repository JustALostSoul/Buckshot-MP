const Item = require("../item");

class BurnerPhone extends Item{
    name = 'Burner Phone';
    description = 'Inform the Player about the location and type of a random shell loaded in the chamber';

    use(gun){
        let shellNr = this.getRandomIntInclusive(0, gun.currentMagazine.getLength()-1);

        return {
            shellNr: shellNr,
            live: gun.currentMagazine.Shells[shellNr].live,
        }
    }

    getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }
}

module.exports = BurnerPhone;