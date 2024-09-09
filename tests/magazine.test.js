const Magazine = require('../classes/magazine');

test('Creates a Magazine of 5 Shells with 1 live Rounds', () => {
    const size = 5;
    const liveRounds = 1;

    testMagazine = new Magazine(size, liveRounds);

    //count the number of live Rounds in the testMagazine
    let count = 0;
    for(let i = 0; i <= size-1; i++) {
        if(testMagazine.Shells[i].live == true) {
            count++;
        }
    }

    expect(testMagazine.Shells.length).toBe(size);
    expect(count).toBe(liveRounds);
});

test('Creates a Magazine of 3 Shells with 3 live Rounds', () => {
    const size = 3;
    const liveRounds = 3;

    testMagazine = new Magazine(size, liveRounds);

    //count the number of live Rounds in the testMagazine
    let count = 0;
    for(let i = 0; i <= size-1; i++) {
        if(testMagazine.Shells[i].live == true) {
            count++;
        }
    }

    expect(testMagazine.Shells.length).toBe(size);
    expect(count).toBe(liveRounds);
});

test('Creates a Magazine of 10 Shells with 5 live Rounds', () => {
    const size = 10;
    const liveRounds = 5;

    testMagazine = new Magazine(size, liveRounds);

    //count the number of live Rounds in the testMagazine
    let count = 0;
    for(let i = 0; i <= size-1; i++) {
        if(testMagazine.Shells[i].live == true) {
            count++;
        }
    }

    expect(testMagazine.Shells.length).toBe(size);
    expect(count).toBe(liveRounds);
});

test('Creates a Magazine of 15 Shells with 0 live Rounds', () => {
    const size = 15;
    const liveRounds = 0;

    testMagazine = new Magazine(size, liveRounds);

    //count the number of live Rounds in the testMagazine
    let count = 0;
    for(let i = 0; i <= size-1; i++) {
        if(testMagazine.Shells[i].live == true) {
            count++;
        }
    }

    expect(testMagazine.Shells.length).toBe(size);
    expect(count).toBe(liveRounds);
});