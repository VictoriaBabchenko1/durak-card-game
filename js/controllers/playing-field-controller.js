class PlayingFieldController {
    static fieldCardsPairs = [];
    static discardPile = [];

    static hasCardWithSameSuit(suit) {
        return this.fieldCardsPairs.some(pair =>
            pair.attackerCard.getSuit() === suit || (pair.defenderCard && pair.defenderCard.getSuit() === suit)
        );
    }

    static hasUnbeatenCard() {
        return this.fieldCardsPairs.some(pair => !pair.isBeaten());
    }

    static areAllCardsBeaten() {
        return this.fieldCardsPairs.every(pair => pair.isBeaten());
    }

    static addCardToField(card, player) {
        if (player.getMode() === 'attacker' && (PlayingFieldController.hasCardWithSameSuit(card.getSuit()) || !this.hasUnbeatenCard())) {
            this.fieldCardsPairs.push(new CardsPairs(card));
            player.removeCard(card);
        } else if (player.getMode() === 'defender') {
            const lastPair = this.fieldCardsPairs[this.fieldCardsPairs.length - 1];

            if (lastPair && !lastPair.isBeaten() && CardController.canBeat(card, lastPair.attackerCard)) {
                lastPair.setDefenderCard(card);
                player.removeCard(card);
            } else {
                console.log("This card cannot beat the attacker card.");
            }
        }

        PlayingFieldView.render(this.fieldCardsPairs);
    }

    static moveCardsToDiscardPile(discardPileController) {
        this.fieldCardsPairs.forEach(pair => {
            this.discardPile.push(pair.attackerCard);
            if (pair.defenderCard) {
                this.discardPile.push(pair.defenderCard);
            }
        });

        this.fieldCardsPairs = [];
        PlayingFieldView.render(this.fieldCardsPairs);
    }
}
