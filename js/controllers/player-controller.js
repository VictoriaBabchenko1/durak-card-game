class PlayerController {
    static players = [];

    static createPlayer(name, mode) {
        const player = new PlayerModel(name, mode);
        this.players.push(player);

        return player;
    }

    static getPlayerByCardId(cardId) {
        return this.players.find(player =>
            player.getCards().some(card => card.getValue() === cardId)
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
        if (player.getMode() === 'defender') {
            player.setSelectedCard(card);
            console.log("Selected card: ", card);
        } else {
            this.moveCardToField(card);
        }
    }

    static takeCards(player, count) {
        const cards = DeckController.dealCards(count);
        cards.forEach(card => player.addCard(card));
    }

    static moveCardToField(card) {//need player as argument
        const player = this.getPlayerByCardId(card.getValue());

        PlayingFieldController.addCardToField(card, player);
        PlayerView.updatePlayerCards(player);
    }
}
