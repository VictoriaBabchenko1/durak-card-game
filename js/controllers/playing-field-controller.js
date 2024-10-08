class PlayingFieldController {
    static fieldCardsPairs = [];
    static discardPile = [];

    static hasCardWithSameValue(value) {
        return this.fieldCardsPairs.some(pair =>
            pair.attackerCard.getValue() === value || (pair.defenderCard && pair.defenderCard.getValue() === value)
        );
    }

    static hasUnbeatenCard() {
       return !this.areAllCardsBeaten();
    }

    static areAllCardsBeaten() {
        return this.fieldCardsPairs.every(pair => pair.isBeaten());
    }

    static addCardToField(card, pair, player) {
        this.handleDefenderMove(card, pair, player);
        player.setSelectedCard(null);
        PlayerView.updatePlayerCards(player);
        PlayingFieldView.render(PlayingFieldController.fieldCardsPairs);
        PlayerController.checkForWin();
    }

    static handleAttackerMove(card, player) {
        const canPlayCard = this.fieldCardsPairs.length === 0 || this.hasCardWithSameValue(card.getValue());

        if (canPlayCard) {
            this.fieldCardsPairs.push(new CardsPairs(card));
            player.removeCard(card);
        } else {
            console.log("Attacker cannot play this card.");
        }
    }

    static handleDefenderMove(card, cardPair, player) {
        const canPlayCard = !cardPair.isBeaten() && CardController.canBeat(card, cardPair.getAttackerCard());

        if (canPlayCard) {
            cardPair.setDefenderCard(card);
            player.removeCard(card);
        } else {
            console.log("This card cannot be played.");
        }
    }

    static moveCardsToDiscardPile() {
        this.fieldCardsPairs.forEach(pair => {
            this.discardPile.push(pair.attackerCard);
            this.discardPile.push(pair.defenderCard);
        });

        this.fieldCardsPairs = [];
        PlayingFieldView.render(this.fieldCardsPairs);
    }

    static clearFieldCards() {
        const cardsOnField = [];

        this.fieldCardsPairs.forEach(pair => {
            cardsOnField.push(pair.attackerCard);
            if (pair.defenderCard) {
                cardsOnField.push(pair.defenderCard);
            }
        });

        this.fieldCardsPairs = [];
        PlayingFieldView.render(this.fieldCardsPairs);

        return cardsOnField;
    }

    static isFieldEmpty() {
        return this.fieldCardsPairs.length === 0;
    }
}