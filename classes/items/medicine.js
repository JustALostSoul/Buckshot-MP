const Item = require("../item");

class ExpiredMedicine extends Item{
    constructor(fixed = false, heals = false){
        super();
        this.fixed = fixed;
        this.heals = heals;
    }

    name = 'Expired Medicine';
    description = '50% chance to gain 2 charges, or else lose 1 charge.'

    use(player){
        if(this.fixed){
            if(this.heals){
                this.lastRoll = 0;
            }else{
                this.lastRoll = 1;
            }
        }else{
            this.lastRoll = Math.random();
        }

        if(this.lastRoll < 0.5) {
            player.health = player.health + 2;
        }else{
            player.health = player.health - 1;
        }
    }
}

module.exports = ExpiredMedicine;