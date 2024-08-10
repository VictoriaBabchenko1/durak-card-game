document.addEventListener('DOMContentLoaded', () => {
    const deckController = new DeckController();
    deckController.createDeck();
    deckController.shuffleDeck();
    const dealtCardsPlayer1 = deckController.dealCards(6);
    const dealtCardsPlayer2 = deckController.dealCards(6);

    const cardsContainerPlayer1 = document.querySelector('.player1__cards')
    dealtCardsPlayer1.forEach(cardModel => {
        new CardView(cardModel).renderCard(cardsContainerPlayer1);
    });

    const cardsContainerPlayer2 = document.querySelector('.player2__cards')
    dealtCardsPlayer2.forEach(cardModel => {
        new CardView(cardModel).renderCard(cardsContainerPlayer2);
    });
});
