const Item = require("../item");

class CigarettePack extends Item{
    name = 'Cigarette Pack';
    description = 'Gain 1 Charge(Health)'

    use(player){
        player.health++;
    }
}

module.exports = CigarettePack;