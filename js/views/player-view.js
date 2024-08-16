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
        playerCardsContainer.replaceChildren();

        player.getCards().forEach(card => {
            const cardElement = CardView.render(card, playerCardsContainer);

            cardElement.addEventListener('click', () => {
                if(player.getMode() === 'defender') {
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
