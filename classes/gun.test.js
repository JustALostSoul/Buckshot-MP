const Gun = require("./gun")

test('Tests if Gun is loaded on creation', () => {
    let testGun = new Gun();
    
    expect(testGun.currentMagazine.Shells.length).toBeGreaterThan(0);
})