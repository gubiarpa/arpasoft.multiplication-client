export const shuffle = (arr = []) => arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getRandomBetween = (min, max) => min + getRandomInt(max - min + 1);

export const getRandomMembers = (factor1, factor2) => ({
    member1: getRandomBetween(2, factor1),
    member2: getRandomBetween(2, factor2),
})

export const getOptionsFromMembers = (member1, member2) => {

    // Mock
    const combination = [];

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i !== 0 && j !== 0) {
                combination.push((member1 + i) * (member2 + j));
            }
        }
    }

    const options = shuffle([...new Set(combination)]).slice(0, 3); // get first 3 options

    return shuffle([...options, (member1 * member2)]);

}