class CardModel {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }

    getSuit() {
        return this.suit;
    }

    getRank() {
        return this.rank;
    }

    getValue() {
        return this.value;
    }
}