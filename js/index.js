document.addEventListener('DOMContentLoaded', () => {
    DeckController.createDeck();
    DeckController.shuffleDeck();
    const dealtCardsPlayer1 = DeckController.dealCards(6);
    const dealtCardsPlayer2 = DeckController.dealCards(6);

    const cardsContainerPlayer1 = document.querySelector('.player1__cards')
    dealtCardsPlayer1.forEach(card => {
        CardController.renderCard(card, cardsContainerPlayer1);
    });

    const cardsContainerPlayer2 = document.querySelector('.player2__cards')
    dealtCardsPlayer2.forEach(card => {
        CardController.renderCard(card, cardsContainerPlayer2);
    });
});
