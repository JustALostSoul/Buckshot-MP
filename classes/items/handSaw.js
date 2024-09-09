const Item = require("../item");

class HandSaw extends Item{
    name = 'Hand Saw';
    description = 'Shotgun deals double damage for 1 turn.'

    use(gun){
        gun.damage = gun.damage*2;
    }
}

module.exports = HandSaw;