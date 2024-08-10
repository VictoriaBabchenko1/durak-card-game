class CardView {
    constructor(cardModel) {
        this.cardModel = cardModel;
    }

    renderCard(cardsContainer) {
        this.element = document.createElement('div');
        this.element.className = 'card';

        this.element.innerHTML = `
            <span class="card__rank">${this.cardModel.getRank()}</span>
            <span class="card__suit suit_${this.cardModel.getSuit()}"></span>
        `;

        this.element.addEventListener('click', () => {
            this.toggleSelect();
        });

        cardsContainer.appendChild(this.element);
    }

    toggleSelect() {
        this.element.classList.toggle('card_selected');
    }
}
