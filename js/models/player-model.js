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
        this.cards = this.cards.filter(c => c !== card)
    }

    getSelectedCard() {
        return this.selectedCard;
    }

    setSelectedCard(card) {
        this.selectedCard = card;
    }
}
