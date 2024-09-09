const Item = require("../item");

class MagnifyingGlass extends Item{
    name = 'Magnifying Glass';
    description = 'Check the currently loaded shell in the chamber';

    use(gun){
        return gun.currentMagazine.Shells[0].live;
    }
}

module.exports = MagnifyingGlass;