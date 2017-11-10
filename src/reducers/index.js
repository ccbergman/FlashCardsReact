
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
        // case "SHUFFLE_CARDS":
        //     return shuffleCards();
        default:
            return state;
    }
}
