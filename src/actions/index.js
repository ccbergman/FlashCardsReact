export function flipCard() {
    return {
        type: "FLIP_CARD"
    };
}

export function shuffleCards() {
    return {
        type: "SHUFFLE_CARDS",
    };
}

export function nextCard() {
    return {
        type: "NEXT_CARD",
    };
}

export function prevCard() {
    return {
        type: "PREV_CARD",
    };
}