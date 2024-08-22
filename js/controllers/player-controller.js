class PlayerController {
    static players = [];
    static PLAYER_CARDS_COUNT = 6;

    static createPlayer(name, mode) {
        const player = new PlayerModel(name, mode);
        this.players.push(player);

        return player;
    }

    static getPlayerByMode( mode) {
        return this.players.filter(player => player.getMode() === mode);
    }

    static changePlayerMode(player, mode) {
        player.setMode(mode);
        PlayerView.updatePlayerMode(player);
    }

    static selectCard(player, card) {
        console.log(`${player.getMode()} selected card: `, card);
        player.setSelectedCard(card);
    }

    static takeCardsFromDeck(player, count) {
        const cards = DeckController.dealCards(count);
        cards.forEach(card => player.addCard(card));
    }

    static moveCardToField(card, player) {
        PlayingFieldController.handleAttackerMove(card, player);
        PlayerView.updatePlayerCards(player);
        PlayingFieldView.render(PlayingFieldController.fieldCardsPairs);
        PlayerController.checkForWin();
    }

    static handleTakeCardsButtonClick(player) {
        if (player.getMode() === 'defender' && PlayingFieldController.hasUnbeatenCard()) {
            const clearedFieldCards = PlayingFieldController.clearFieldCards();
            clearedFieldCards.forEach(card => player.addCard(card));

            this.dealCardsToPlayers();
            PlayerView.updateButtonsState();
        }
    }

    static handleDoneButtonClick(player) {
        if (player.getMode() === 'attacker' && PlayingFieldController.areAllCardsBeaten()) {
            PlayingFieldController.moveCardsToDiscardPile();
            this.dealCardsToPlayers();
            PlayerView.updateButtonsState();
            this.swapPlayerModes();
        } else {
            console.log("Not all cards are beaten. Can't end the turn.");
        }
    }

    static dealCardsToPlayers() {
        const attacker = this.getPlayerByMode('attacker')[0];
        const defender = this.getPlayerByMode('defender')[0];

        if (attacker.getCards().length < this.PLAYER_CARDS_COUNT) {
            const neededCards = 6 - attacker.getCards().length;
            this.takeCardsFromDeck(attacker, neededCards);
        }

        if (defender.getCards().length < this.PLAYER_CARDS_COUNT) {
            const neededCards = 6 - defender.getCards().length;
            this.takeCardsFromDeck(defender, neededCards);
        }

        PlayerView.updatePlayerCards(attacker);
        PlayerView.updatePlayerCards(defender);
    }

    static swapPlayerModes() {
        const attacker = this.getPlayerByMode('attacker')[0];
        const defender = this.getPlayerByMode('defender')[0];

        if (attacker && defender) {
            this.changePlayerMode(attacker, 'defender');
            this.changePlayerMode(defender, 'attacker');
        }
    }

    static checkForWin() {
        const deckIsEmpty = DeckController.isEmpty();
        const winningPlayer = this.players.find(player => player.getCards().length === 0);

        if (deckIsEmpty && winningPlayer) {
            PlayerView.renderWinnerModal(winningPlayer.getName());
        }
    }
}
