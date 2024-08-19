class PlayerView {
    static render(player, playerElement) {
        playerElement.setAttribute('data-name', player.getName());

        const playerInfoElement = document.createElement('div');
        playerInfoElement.className = 'player__info';

        const playerNameElement = document.createElement('p');
        playerNameElement.textContent = `Player name: ${player.getName()}`;

        const playerModeElement = document.createElement('p');
        playerModeElement.textContent = `Player mode: ${player.getMode()}`;

        playerInfoElement.appendChild(playerNameElement);
        playerInfoElement.appendChild(playerModeElement);

        const playerCardsContainer = document.createElement('div');
        playerCardsContainer.className = 'player__cards';

        playerElement.appendChild(playerInfoElement);
        playerElement.appendChild(playerCardsContainer);

        this.renderPlayerCards(player, playerCardsContainer);
    }

    static renderPlayerCards(player, playerCardsContainer) {
        playerCardsContainer.replaceChildren();

        player.getCards().forEach(card => {
            const cardElement = CardView.render(card, playerCardsContainer);

            cardElement.addEventListener('click', () => {
                if (player.getMode() === 'defender') {
                    PlayerController.selectCard(player, card);
                    CardView.toggleSelect(cardElement);
                }
                else {
                    PlayerController.moveCardToField(card, player);
                }
            });
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
