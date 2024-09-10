const Item = require("../item");

class Inverter extends Item{
    name = 'Inverter';
    description = 'Swaps the current shell into its opposite form.';

    use(gun){
        gun.currentMagazine.Shells[0].live = !gun.currentMagazine.Shells[0].live;
    }
}

module.exports = Inverter;