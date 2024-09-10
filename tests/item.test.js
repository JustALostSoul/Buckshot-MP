const Gun = require("../classes/gun");
const HandSaw = require("../classes/items/handSaw");
const Player = require("../classes/player");
const Beer = require("../classes/items/beer");
const CigarettePack = require("../classes/items/cigarette");
const ExpiredMedicine = require("../classes/items/medicine");
const MagnifyingGlass = require("../classes/items/mglass");
const Handcuffs = require("../classes/items/handcuffs");
const Inverter = require("../classes/items/inverter");

test('Tests if the Hand Saw causes double damage', () => {
    let testGun = new Gun(1,1,true);
    let testPlayer = new Player();
    let testHandSaw = new HandSaw();

    testHandSaw.use(testGun);
    expect(testGun.damage).toBe(2);
    testGun.shoot(testPlayer);
    expect(testPlayer.health).toBe(2);
});

test('Tests if the Beer unloads one Shell from Gun', () => {
    let testGun = new Gun(2,2,true);
    let testBeer = new Beer();

    expect(testGun.currentMagazine.Shells.length).toBe(2);
    testBeer.use(testGun);
    expect(testGun.currentMagazine.Shells.length).toBe(1);
});

test('Tests if the Cigarette Pack heals properly', () => {
    let testPlayer = new Player();
    let testCig = new CigarettePack();

    expect(testPlayer.health).toBe(4);
    testCig.use(testPlayer);
    expect(testPlayer.health).toBe(5);
});

test('Tests, if Medicine adds/subtracts health properly on random value', () => {
    let testPlayer = new Player();
    let testMeds = new ExpiredMedicine();

    expect(testPlayer.health).toBe(4);
    testMeds.use(testPlayer);
    if(testMeds.lastRoll < 0.5){
        expect(testPlayer.health).toBe(6);
    }else{
        expect(testPlayer.health).toBe(3);
    }
});

test('Tests, if Medicine adds health on fixed good one', () => {
    let testPlayer = new Player();
    let testMeds = new ExpiredMedicine(true, true);

    expect(testPlayer.health).toBe(4);
    testMeds.use(testPlayer);
    expect(testPlayer.health).toBe(6);
});

test('Tests, if Medicine adds health on fixed good one', () => {
    let testPlayer = new Player();
    let testMeds = new ExpiredMedicine(true, false);

    expect(testPlayer.health).toBe(4);
    testMeds.use(testPlayer);
    expect(testPlayer.health).toBe(3);
});

test('Test if Magnifying Glass detects live round', () => {
    let testGun = new Gun(1,1,true);
    let testGlass = new MagnifyingGlass();

    let result = testGlass.use(testGun);
    expect(result).toBe(true);
});

test('Test, if handcuffs apply the depuff', () => {
    let testPlayer = new Player();
    let testCuffs = new Handcuffs();

    testCuffs.use(testPlayer);
    expect(testPlayer.nextPlayer).toBe(true);
});

test('Test, if Shell is correctly inverted', () => {
    let testGun = new Gun(1,1,true);
    let testVert = new Inverter();

    expect(testGun.getNextShell.live).toBe(true);
    testVert.use(testGun);
    expect(testGun.getNextShell.live).toBe(false);
});