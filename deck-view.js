class DeckView {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'deck';

        const gameInfo = document.querySelector('.game-info');
        gameInfo.appendChild(this.element);

        this.updateView(0);
    }

    updateView(amount) {
        this.element.innerText = `Cards amount in deck: ${amount}`;
    }
}
