class CardView {
    static renderCard(cardModel, cardsContainer) {
        const element = document.createElement('div');//rename cardEl
        element.className = 'card';

        element.innerHTML = `
            <span class="card__rank">${cardModel.getRank()}</span>
            <span class="card__suit suit_${cardModel.getSuit()}"></span>
        `;

        element.addEventListener('click', () => {
            this.toggleSelect(element);
        });

        cardsContainer.appendChild(element);
    }

    static toggleSelect(element) {
        element.classList.toggle('card_selected');
    }
}
