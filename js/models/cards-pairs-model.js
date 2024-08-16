class CardsPairs {
    constructor(attacker) {
        this.attackerCard = attacker;
        this.defenderCard = null;
        this.selectedCard = null;
    }

    getDefenderCard() {
        return this.defenderCard;
    }

    setDefenderCard(card) {
        this.defenderCard = card;
    }

    getAttackerCard() {
        return this.attackerCard;
    }

    setAttackerCard(card) {
        this.attackerCard = card;
    }
    isBeaten() {
        return this.defenderCard !== null;
    }

    setSelectedCard(card) {
        this.selectedCard = card;
    }

    getSelectedCard() {
        return this.selectedCard;
    }
}