class CardModel {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
        this.onSelect = null;
    }

    getSuit() {
        return this.suit;
    }

    setSuit(suit) {
        this.suit = suit;
    }

    getRank() {
        return this.rank;
    }

    setRank(rank) {
        return this.rank = rank;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }
}