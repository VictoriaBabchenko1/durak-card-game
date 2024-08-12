class CardController {
    static createCard(suit, rank, value) {
        return new CardModel(suit, rank, value);
    }

    static renderCard(card, cardsContainer) {
        CardView.render(card, cardsContainer)
    }

    static canBeat(tossupCard, fightCard) {
        const isTheSameSuit = tossupCard.getSuit() === fightCard.getSuit();
        const canCardBeat = fightCard.getValue() > tossupCard.getValue();

        return isTheSameSuit && canCardBeat;
    }
}