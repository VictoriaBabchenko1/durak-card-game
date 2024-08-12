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
        });

        cardsContainer.appendChild(cardElement);
    }

    static toggleSelect(cardElement) {
        cardElement.classList.toggle('card_selected');
    }
}
