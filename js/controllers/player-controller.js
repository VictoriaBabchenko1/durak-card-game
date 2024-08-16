class PlayerController {
    static players = [];

    static createPlayer(name, mode) {
        const player = new PlayerModel(name, mode);
        this.players.push(player);

        return player;
    }

    static getPlayerByCardId(cardValue, cardSuit) {
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

    static takeCards(player, count) {
        const cards = DeckController.dealCards(count);
        cards.forEach(card => player.addCard(card));
    }

    static moveCardToField(card, player) {
        PlayingFieldController.handleAttackerMove(card, player);
        PlayerView.updatePlayerCards(player);
        PlayingFieldView.render(PlayingFieldController.fieldCardsPairs);
    }
}
