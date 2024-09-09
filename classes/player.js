class Player{
    constructor(health = 4){
        this.health = health;
        this.nextPlayer = false;
    }

    damage(damageValue = 1){
        this.health = this.health - damageValue;
    }
}

module.exports = Player;