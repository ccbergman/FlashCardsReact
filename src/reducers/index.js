const INITIAL_STATE = {
    currentCardIndex: 0,
    isFront: true,
    cards: [
        { front: "What does HTML stand for?", back: "Hypertext Markup Language" },
        { front: "T/F: GitHub is used for Version Control", back: "True" },
        { front: "What does NaN stand for?", back: "Not A Number" },
        { front: "T/F: An exclamation point is referred to as a 'boom'", back: "False, it's referred to as a 'bang'" },
        { front: "What is the 'magic number' of Connections on LinkedIn?", back: "500+" },
        { front: "What is the CSS selector for ID='example'?", back: "#example" }
    ]
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case "FLIP_CARD":
            if (state.isFront === true) {
                return Object.assign({}, state, {
                    isFront: false
                });
            } else {
                return Object.assign({}, state, {
                    isFront: true
                });
            }

        case "PREV_CARD":
            return Object.assign({}, state, {
                currentCardIndex: state.currentCardIndex - 1
            });

        case "NEXT_CARD":
            return Object.assign({}, state, {
                currentCardIndex: state.currentCardIndex + 1
            });

        case "SHUFFLE_CARDS":
            const flashCards = state.cards;
            const newFlashCards = flashCards.map((card) => (
                card
            ));
            let shuffledCards = [];

            function selectCard(newFlashCards) {
                let random = newFlashCards[Math.floor(Math.random() * newFlashCards.length)];
                let removeCard = random;
                let index = newFlashCards.indexOf(removeCard);
                shuffledCards.push(removeCard);
                newFlashCards.splice(index, 1);
                return newFlashCards;
            }
            selectCard(newFlashCards);
            selectCard(newFlashCards);
            selectCard(newFlashCards);
            selectCard(newFlashCards);
            selectCard(newFlashCards);
            selectCard(newFlashCards);

            return Object.assign({}, state, {
                currentCardIndex: 0,
                cards: shuffledCards
            });

        default:
            return state;
    }
}