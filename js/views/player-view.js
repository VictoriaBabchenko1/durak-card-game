class PlayerView {
    static render(player) {
        const playerContainer = document.createElement('div');
        playerContainer.className = 'player';
        playerContainer.innerHTML = `
            <div class="player__info">
                <p>Player name: ${player.getName()}</p>
                <p>Player mode: ${player.getMode()}</p>
            </div>
            <div class="player__cards"></div>
        `;

        const playerCardsContainer = playerContainer.querySelector('.player__cards');

        this.renderPlayerCards(player, playerCardsContainer);

        const gameContainer = document.querySelector('.playing-board');
        gameContainer.appendChild(playerContainer);
    }

    static renderPlayerCards(player, playerCardsContainer) {
        playerCardsContainer.innerHTML = '';

        player.getCards().forEach(card => {
            CardView.render(card, playerCardsContainer);
        });
    }
}
