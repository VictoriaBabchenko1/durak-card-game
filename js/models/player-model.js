class PlayerModel {
    constructor(name, mode) {
        this.name = name;
        this.mode = mode;
        this.cards = [];
        this.selectedCard = null;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getMode() {
        return this.mode;
    }

    setMode(mode) {
        this.mode = mode;
    }

    getCards() {
        return this.cards;
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(card) {
        const index = this.cards.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
    }

    getSelectedCard() {
        return this.selectedCard;
    }

    setSelectedCard(card) {
        this.selectedCard = card;
    }

    clearSelectedCard() {
        this.selectedCard = null;
    }
}
