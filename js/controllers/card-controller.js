class CardController {
    static createCard(cardModel, cardsContainer) {
        CardView.renderCard(cardModel, cardsContainer)
    }

    //tossupCard fightCard
    static canBeat(cardModel, otherCard) {
        return cardModel.getSuit() === otherCard.getSuit() && cardModel.getValue() > otherCard.getValue();
    }
}