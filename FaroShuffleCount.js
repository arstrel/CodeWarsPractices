const faroCount = deckSize =>{
    const shuffle = deck => {
        let halfPoint = deckSize / 2;
        let bottomHalf = deck.slice(0, halfPoint);
        let topHalf = deck.slice(halfPoint, deck.length);
        console.log(deck)
        deck.length = 0;
        // let freshDeck = [];
        for (let i = 0; i < halfPoint; i++) {
            deck.push(bottomHalf[i]);
            deck.push(topHalf[i]);
        }
        // for (let i = 0; i < halfPoint; i++) {
        //     freshDeck.push(bottomHalf[i]);
        //     freshDeck.push(topHalf[i]);
        // }
        console.log(deck)
        // return freshDeck
        return deck
    };

    let originalDeck = [];
    for (let i = 0; i < deckSize; i++) {
        originalDeck.push(i)
    };
    let workingDeck = shuffle(originalDeck.slice());
    let shuffleCount = 1;
    let originalDeckStr = JSON.stringify(originalDeck)
    while (originalDeckStr != JSON.stringify(workingDeck)) {
        shuffle(workingDeck)
        shuffleCount++

    }
    return shuffleCount
}



faroCount(2)