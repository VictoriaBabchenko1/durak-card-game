class DeckView {
    static cardsAmountElement = document.createElement('div');

    static render(amount, trump) {
        this.cardsAmountElement.className = 'deck';
        this.update(amount);

        const trumpSuitElement = this.renderTrump(trump);

        const gameInfo = document.querySelector('.game-info');
        gameInfo.appendChild(trumpSuitElement);
        gameInfo.appendChild(this.cardsAmountElement);
    }

    static update(amount) {
        this.cardsAmountElement.innerText = `Cards amount in deck: ${amount}`;
    }

    static renderTrump (trump) {
        const trumpSuitElement = document.createElement('div');
        trumpSuitElement.className = `trump suit_${trump}`;
        trumpSuitElement.innerText = 'Trump suit ';

        return trumpSuitElement;
    }
}
