class DeckController {
    static cards = [];

    static createDeck() {
        const suits = ['clubs', 'diamonds', 'spades', 'hearts'];
        const ranks = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];//use obj
        const values = [6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let s = 0; s < suits.length; s++) {
            for (let r = 0; r < ranks.length; r++) {
                this.cards.push(new CardModel(suits[s], ranks[r], values[r]));//rename s r
            }
        }

        DeckView.renderDeck(this.cards.length);
    }

    static shuffleDeck() {
        let counter = this.cards.length;

        while (counter > 0) {
            let randomIndex = Math.floor(Math.random() * counter);
            counter--;

            let temp = this.cards[counter];
            this.cards[counter] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }

    static dealCards(count) {
        const dealtCards = this.cards.splice(0, count);
        DeckView.update(this.cards.length);

        return dealtCards;
    }
}
