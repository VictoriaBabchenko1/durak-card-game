class DeckView {
    static element = document.createElement('div');

    static render(amount) {
        this.element.className = 'deck';
        this.element.innerText = `Cards amount in deck: ${amount}`;

        const gameInfo = document.querySelector('.game-info');
        gameInfo.appendChild(this.element);
    }

    static update(amount) {
        this.element.innerText = `Cards amount in deck: ${amount}`;
    }
}
