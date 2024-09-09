const Item = require("../item");

class Handcuffs extends Item{
    name = 'Handcuffs';
    description = 'Skips the next turn of a opposing player.'

    use(player){
        player.nextPlayer = true;
    }
}

module.exports = Handcuffs;