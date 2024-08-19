class CardView {
    static render(card, cardsContainer) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        const rankElement = document.createElement('span');
        rankElement.className = 'card__rank';
        rankElement.textContent = card.getRank();

        const suitElement = document.createElement('span');
        suitElement.className = `card__suit suit_${card.getSuit()}`;

        cardElement.appendChild(rankElement);
        cardElement.appendChild(suitElement);

        cardsContainer.appendChild(cardElement);

        return cardElement;
    }

    static toggleSelect(cardElement) {
        const selectedCardElement = document.querySelector('.card_selected');

        if (selectedCardElement && selectedCardElement !== cardElement) {
            selectedCardElement.classList.remove('card_selected');
        }

        cardElement.classList.toggle('card_selected');
    }
}
