class CardView {
    static render(card, cardsContainer) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        cardElement.innerHTML = `
            <span class="card__rank">${card.getRank()}</span>
            <span class="card__suit suit_${card.getSuit()}"></span>
        `;

        cardElement.addEventListener('click', () => {
            this.toggleSelect(cardElement);
            PlayerController.moveCardToField(card);
        });

        cardsContainer.appendChild(cardElement);
    }

    static toggleSelect(cardElement) {
        const selectedCardElement = document.querySelector('.card_selected');

        if (selectedCardElement && selectedCardElement !== cardElement) {
            selectedCardElement.classList.remove('card_selected');
        }

        cardElement.classList.toggle('card_selected');
    }
}
