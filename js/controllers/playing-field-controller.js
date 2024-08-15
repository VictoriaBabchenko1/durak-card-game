class PlayingFieldController {
    static fieldCardsPairs = [];
    static discardPile = [];

    static hasCardWithSameValue(value) {
        return this.fieldCardsPairs.some(pair =>
            pair.attackerCard.getValue() === value || (pair.defenderCard && pair.defenderCard.getValue() === value)
        );
    }

    static hasUnbeatenCard() {
        return this.fieldCardsPairs.some(pair => !pair.isBeaten());
    }

    static areAllCardsBeaten() {
        return this.fieldCardsPairs.every(pair => pair.isBeaten());
    }

    static addCardToField(card, player) {
        if (player.getMode() === 'attacker') {
            if (this.hasCardWithSameValue(card.getValue()) || !this.hasUnbeatenCard()) {
                this.fieldCardsPairs.push(new CardsPairs(card));
                player.removeCard(card);
            } else {
                console.log("Attacker cannot play this card.");
                return;
            }
        } else if (player.getMode() === 'defender') {
            const lastPair = this.fieldCardsPairs[this.fieldCardsPairs.length - 1];

            if (!lastPair.isBeaten() && CardController.canBeat(card, lastPair.getAttackerCard())) {
                lastPair.setDefenderCard(card);
                player.removeCard(card);
            } else {
                console.log("This card cannot beat the attacker card.");
                return;
            }
        }

        PlayingFieldView.render(this.fieldCardsPairs);
    }

    static moveCardsToDiscardPile() {
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