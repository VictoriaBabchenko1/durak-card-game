class CardController {
    static createCard(suit, rank, value) {
        return new CardModel(suit, rank, value);
    }

    static renderCard(card, cardsContainer) {
        CardView.render(card, cardsContainer)
    }

    static canBeat(attacker, defender) {
        const isTheSameSuit = attacker.getSuit() === defender.getSuit();
        const canCardBeat = attacker.getValue() > defender.getValue();

        return isTheSameSuit && canCardBeat;
    }
}