class PlayerView {
    static render(player, playerElement) {
        playerElement.setAttribute('data-name', player.getName());

        playerElement.innerHTML = `
            <div class="player__info">
                <p>Player name: ${player.getName()}</p>
                <p>Player mode: ${player.getMode()}</p>
            </div>
            <div class="player__cards"></div>
        `;

        const playerCardsContainer = playerElement.querySelector('.player__cards');

        this.renderPlayerCards(player, playerCardsContainer);
    }

    static renderPlayerCards(player, playerCardsContainer) {
        playerCardsContainer.innerHTML = '';

        player.getCards().forEach(card => {
            CardView.render(card, playerCardsContainer);
        });
    }

    static updatePlayerCards(player) {
        const playerContainer = document.querySelector(`.player[data-name="${player.getName()}"]`);
        if (playerContainer) {
            const playerCardsContainer = playerContainer.querySelector('.player__cards');
            this.renderPlayerCards(player, playerCardsContainer);
        }
    }
}
