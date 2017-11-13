const INITIAL_STATE = {
    currentCardIndex: 0,
    isFront: true,
    cards: [
        { front: "A Front", back: "A Back" },
        { front: "B Front", back: "B Back" },
        { front: "C Front", back: "C Back" },
        { front: "D Front", back: "D Back" },
        { front: "E Front", back: "E Back" },
        { front: "F Front", back: "F Back" }
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
