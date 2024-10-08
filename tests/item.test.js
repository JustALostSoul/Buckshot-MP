const Gun = require("../classes/gun");
const HandSaw = require("../classes/items/handSaw");
const Player = require("../classes/player");
const Beer = require("../classes/items/beer");
const CigarettePack = require("../classes/items/cigarette");
const ExpiredMedicine = require("../classes/items/medicine");
const MagnifyingGlass = require("../classes/items/mglass");
const Handcuffs = require("../classes/items/handcuffs");
const Inverter = require("../classes/items/inverter");
const BurnerPhone = require("../classes/items/burner");
const Adrenalin = require("../classes/items/adrenalin");

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

    expect(testGun.getNextShell().live).toBe(true);
    testVert.use(testGun);
    expect(testGun.getNextShell().live).toBe(false);
});

test('Tests if burner phone detects correct shell.', () => {
    let testGun = new Gun(1,1,true);
    let testBurner = new BurnerPhone();

    let result = testBurner.use(testGun);
    expect(result.shellNr).toBe(0);
    expect(result.live).toBe(true);

    let testGun2 = new Gun();
    let result2 = testBurner.use(testGun2);
    expect(result2.live).toBe(testGun2.currentMagazine.Shells[result2.shellNr].live);
});

test('Tests if Adrenalin can Transfer Items', () => {
    let testPlayer1 = new Player();
    let testPlayer2 = new Player();
    let testAdrenalin = new Adrenalin();

    testPlayer1.addItem(testAdrenalin);
    expect(testPlayer1.itemInventory[0]).toBe(testAdrenalin);

    testAdrenalin.use(testPlayer1, testPlayer2, testAdrenalin);
    expect(testPlayer2.itemInventory[0]).toBe(testAdrenalin);
});