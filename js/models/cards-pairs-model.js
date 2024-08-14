class CardsPairs {
    constructor(attacker) {
        this.attackerCard = attacker;
        this.defenderCard = null;
    }

    setDefenderCard(defender) {
        this.defenderCard = defender;
    }

    isBeaten() {
        return this.defenderCard !== null;
    }
}
