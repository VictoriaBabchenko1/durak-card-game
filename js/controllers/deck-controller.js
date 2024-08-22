class DeckController {
    static cards = [];
    static trumpSuit = null;

    static createDeck() {
        const suits = ['clubs', 'diamonds', 'spades', 'hearts'];
        const ranksAndValues = {
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            '10': 10,
            'Jack': 11,
            'Queen': 12,
            'King': 13,
            'Ace': 14
        };

        for (let suit of suits) {
            for (let [rank, value] of Object.entries(ranksAndValues)) {
                this.cards.push(CardController.createCard(suit, rank, value));
            }
        }

        this.randomTrumpSelect(suits);

        DeckView.render(this.cards.length, this.trumpSuit);
    }

    static randomTrumpSelect (suits) {
        this.trumpSuit = suits[Math.floor(Math.random() * suits.length)];
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

    static isEmpty() {
        return this.cards.length === 0;
    }
}
