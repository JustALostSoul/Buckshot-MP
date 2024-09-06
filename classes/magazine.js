const Shell = require('./shell');

class Magazine{
    constructor(size, liveRounds){

        this.liveRoundList = this.getRandomShells(size, liveRounds);
        this.Shells = this.fillMagazine(size, this.liveRoundList);
              
    }

    getRandomShells(size, liveRounds){
        const liveRoundList = [];
        for(let i = 0; i < liveRounds; i++){
            let randomShell = Math.floor(Math.random() * (size));
            while(liveRoundList.includes(randomShell)){
                randomShell = Math.floor(Math.random() * (size));
            }
            liveRoundList.push(randomShell);
        }
        return liveRoundList;
    }

    fillMagazine(size, liveRoundList){
        const Shells = [];
        for(let i = 0; i < size; i++){
            if(liveRoundList.includes(i)){
                Shells.push(new Shell(true));
            } else {
                Shells.push(new Shell(false));
            }
        }
        return Shells;  
    }
}

module.exports = Magazine;