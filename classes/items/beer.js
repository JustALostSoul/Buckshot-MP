const Item = require("../item");

class Beer extends Item{
    name = 'Beer';
    description = 'Safely racks the shotgun, ejects currently loaded shell';

    use(gun){
        gun.currentMagazine.Shells.shift();
    }
}

module.exports = Beer;