class CardController {
    static createCard(suit, rank, value) {
        return new CardModel(suit, rank, value);
    }

    static renderCard(card, cardsContainer) {
        CardView.render(card, cardsContainer)
    }

    static canBeat(defender, attacker) {
        const isTheSameSuit = defender.getSuit() === attacker.getSuit();
        const canCardBeat = defender.getValue() > attacker.getValue();

        const isDefenderTrump = defender.getSuit() === DeckController.trumpSuit;
        const isAttackerTrump = attacker.getSuit() === DeckController.trumpSuit;

        if (isDefenderTrump && !isAttackerTrump) {
            return true;
        }

        return isTheSameSuit && canCardBeat;
    }
}