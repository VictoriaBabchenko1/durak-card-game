class PlayerController {
    static players = [];

    static createPlayer(name, mode) {
        const player = new PlayerModel(name, mode);
        this.players.push(player);

        return player;
    }

    static getPlayerByCard(cardValue, cardSuit) {
        return this.players.find(player =>
            player.getCards().some(card => card.getValue() === cardValue && card.getSuit() === cardSuit)
        );
    }

    static getPlayerByName(name) {
        return this.players.find(player => player.getName() === name);
    }

    static getPlayerByMode( mode) {
        return this.players.filter(player => player.getMode() === mode);
    }

    static changePlayerMode(player, mode) {
        player.setMode(mode);
    }

    static selectCard(player, card) {
        console.log(`${player.getMode()} selected card: `, card);
        player.setSelectedCard(card);
    }

    static takeCardsFromDeck(player, count) {
        const cards = DeckController.dealCards(count);
        cards.forEach(card => player.addCard(card));
    }

    static takeCardsFromPlayingField(player) {
        if (player.getMode() === 'defender' && PlayingFieldController.hasUnbeatenCard()) {
            const fieldCards = PlayingFieldController.clearFieldCards();
            fieldCards.forEach(card => player.addCard(card));

            // Check if the attacker needs more cards
            const attacker = this.getPlayerByMode('attacker')[0];
            const neededCards = 6 - attacker.getCards().length;

            if (neededCards > 0) {
                const newCards = DeckController.dealCards(neededCards);
                newCards.forEach(card => attacker.addCard(card));
            }
        }
    }

    static moveCardToField(card, player) {
        PlayingFieldController.handleAttackerMove(card, player);
        PlayerView.updatePlayerCards(player);
        PlayingFieldView.render(PlayingFieldController.fieldCardsPairs);
    }
}
