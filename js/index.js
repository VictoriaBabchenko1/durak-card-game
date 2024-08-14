document.addEventListener('DOMContentLoaded', () => {
    DeckController.createDeck();
    DeckController.shuffleDeck();

    const player1 = PlayerController.createPlayer('Player1', 'defender');
    const player2 = PlayerController.createPlayer('Player2', 'attacker');

    PlayerController.takeCards(player1, 6);
    PlayerController.takeCards(player2, 6);

    PlayerView.render(player1);
    PlayerView.render(player2);
});
