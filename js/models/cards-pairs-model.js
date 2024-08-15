class CardsPairs {
    constructor(attacker) {
        this.attackerCard = attacker;
        this.defenderCard = null;
    }

    setDefenderCard(defender) {
        this.defenderCard = defender;
    }

    getAttackerCard() {
        return this.attackerCard;
    }

    isBeaten() {
        return this.defenderCard !== null;
    }
}