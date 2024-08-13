document.addEventListener('DOMContentLoaded', () => {
    DeckController.createDeck();
    DeckController.shuffleDeck();

    const player1 = PlayerController.createPlayer('Player1', 'defender');
    const player2 = PlayerController.createPlayer('Player2', 'attacker');

    PlayerController.takeCards(player1, 6);
    PlayerController.takeCards(player2, 6);

    PlayerView.render(player1);
    PlayerView.render(player2);

    // DeckController.createDeck();
    // DeckController.shuffleDeck();
    // const dealtCardsPlayer1 = DeckController.dealCards(6);
    // const dealtCardsPlayer2 = DeckController.dealCards(6);
    //
    // const cardsContainerPlayer1 = document.querySelector('.player1__cards')
    // dealtCardsPlayer1.forEach(card => {
    //     CardController.renderCard(card, cardsContainerPlayer1);
    // });
    //
    // const cardsContainerPlayer2 = document.querySelector('.player2__cards')
    // dealtCardsPlayer2.forEach(card => {
    //     CardController.renderCard(card, cardsContainerPlayer2);
    // });
});
