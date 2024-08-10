class DeckController {
    constructor() {
        this.deckView = new DeckView();
        this.cards = [];
    }

    createDeck() {
        const suits = ['clubs', 'diamonds', 'spades', 'hearts'];
        const ranks = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        const values = [6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let s = 0; s < suits.length; s++) {
            for (let r = 0; r < ranks.length; r++) {
                this.cards.push(new CardModel(suits[s], ranks[r], values[r]));
            }
        }
    }

    shuffleDeck() {
        let counter = this.cards.length;
        while (counter > 0) {
            let randomIndex = Math.floor(Math.random() * counter);
            counter--;

            let temp = this.cards[counter];
            this.cards[counter] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }

    dealCards(count) {
        const dealtCards = this.cards.splice(0, count);
        this.deckView.updateView(this.cards.length);
        return dealtCards;
    }
}
