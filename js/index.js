document.addEventListener('DOMContentLoaded', () => {
    DeckController.createDeck();
    DeckController.shuffleDeck();

    const player1 = PlayerController.createPlayer('Player1', 'defender');
    const player2 = PlayerController.createPlayer('Player2', 'attacker');

    PlayerController.takeCards(player1, 6);
    PlayerController.takeCards(player2, 6);

    const playerElement1 = document.querySelector('.player_1')
    const playerElement2 = document.querySelector('.player_2')

    PlayerView.render(player1, playerElement1);
    PlayerView.render(player2, playerElement2);
});
