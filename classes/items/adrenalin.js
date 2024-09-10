const Item = require("../item");

class Adrenalin extends Item{
    name = 'Adrenalin';
    description = 'Steals an Item from another player to instanly use.';

    use(fromPlayer, toPlayer, item){
        fromPlayer.removeItem(item);
        toPlayer.addItem(item);
    }
}

module.exports = Adrenalin;