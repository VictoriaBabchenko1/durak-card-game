class CardController {
    constructor(cardModel, cardView) {
        this.cardModel = cardModel;
        this.cardView = cardView;
    }

    canBeat(otherCard) {
        return this.cardModel.getSuit() === otherCard.getSuit() && this.cardModel.getValue() > otherCard.getValue();
    }
}