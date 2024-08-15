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

    static addCardToField(card, player) {
        const lastPair = this.fieldCardsPairs[this.fieldCardsPairs.length - 1];

        if (player.getMode() === 'attacker') {
            this.handleAttackerMove(card, lastPair, player);
        } else if (player.getMode() === 'defender') {
            this.handleDefenderMove(card, lastPair, player);
        }

        PlayingFieldView.render(this.fieldCardsPairs);
    }

    static handleAttackerMove(card, lastPair, player) {
        const canPlayCard = this.fieldCardsPairs.length === 0 || this.hasCardWithSameValue(card.getValue());//devide into two

        if (canPlayCard) {
            this.fieldCardsPairs.push(new CardsPairs(card));
            player.removeCard(card);
        } else {
            console.log("Attacker cannot play this card.");
        }
    }

    static handleDefenderMove(card, lastPair, player) {
        const canPlayCard = !lastPair.isBeaten() && CardController.canBeat(card, lastPair.getAttackerCard());

        if (canPlayCard) {
            lastPair.setDefenderCard(card);
            player.removeCard(card);
        } else {
            console.log("This card cannot be played.");
        }
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