class PlayerView {
    static render(player, playerElement) {
        playerElement.setAttribute('data-name', player.getName());

        const playerInfoElement = document.createElement('div');
        playerInfoElement.className = 'player__info';

        const playerNameElement = document.createElement('p');
        playerNameElement.className = 'player__name';
        playerNameElement.textContent = `Player name: ${player.getName()}`;

        const playerModeElement = document.createElement('p');
        playerModeElement.classList.add('player__mode');

        playerInfoElement.appendChild(playerNameElement);
        playerInfoElement.appendChild(playerModeElement);

        const playerCardsElement = document.createElement('div');
        playerCardsElement.className = 'player__cards';

        playerElement.appendChild(playerInfoElement);
        this.renderPlayerActions(player, playerElement);
        playerElement.appendChild(playerCardsElement);
        this.renderPlayerCards(player, playerCardsElement);
        this.updatePlayerMode(player);
    }

    static updatePlayerMode(player) {
        const playerContainer = document.querySelector(`.player[data-name="${player.getName()}"]`);

        if (playerContainer) {
            const playerModeElement = playerContainer.querySelector('.player__mode');
            playerModeElement.textContent = `Player mode: ${player.getMode()}`;
        }
    }

    static renderPlayerCards(player, playerCardsElement) {
        playerCardsElement.replaceChildren();

        player.getCards().forEach(card => {
            const cardElement = CardView.render(card, playerCardsElement);

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

    static renderPlayerActions(player, playerElement) {
        const playerActionsElement = document.createElement('div');
        playerActionsElement.className = 'player__actions';

        const takeCardsButton = this.renderTakeCardsButton(player);
        const doneButton = this.renderDoneButton(player);

        playerActionsElement.appendChild(takeCardsButton);
        playerActionsElement.appendChild(doneButton);

        playerElement.appendChild(playerActionsElement);
    }

    static renderTakeCardsButton(player) {
        const takeCardsButton = document.createElement('button');
        takeCardsButton.textContent = 'Take Cards';
        takeCardsButton.classList.add('button_take-cards');

        takeCardsButton.disabled = true;

        takeCardsButton.addEventListener('click', () => {
            PlayerController.handleTakeCardsButtonClick(player);
        });

        return takeCardsButton;
    }

    static renderDoneButton(player) {
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('button_done');

        doneButton.disabled = true;

        doneButton.addEventListener('click', () => {
            PlayerController.handleDoneButtonClick(player);
        });

        return doneButton;
    }

    static updateButtonsState() {
        const defender = PlayerController.getPlayerByMode('defender')[0];
        const attacker = PlayerController.getPlayerByMode('attacker')[0];

        if (defender) {
            const takeCardsButton = document.querySelector(`.player[data-name="${defender.getName()}"] .button_take-cards`);
            if (takeCardsButton) {
                takeCardsButton.disabled = PlayingFieldController.isFieldEmpty() || PlayingFieldController.areAllCardsBeaten();
            }
        }

        if (attacker) {
            const doneButton = document.querySelector(`.player[data-name="${attacker.getName()}"] .button_done`);
            if (doneButton) {
                doneButton.disabled = PlayingFieldController.isFieldEmpty() || PlayingFieldController.hasUnbeatenCard();
            }
        }
    }

    static renderWinnerModal(winnerName) {
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');

        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal__content');

        const closeButton = document.createElement('button');
        closeButton.classList.add('modal_button-close');
        closeButton.textContent = '\u2715';

        const winnerText = document.createElement('p');
        winnerText.classList.add('modal__content_winner');
        winnerText.textContent = `Winner: ${winnerName}`;

        const okButton = document.createElement('button');
        okButton.classList.add('modal_button-ok');
        okButton.textContent = 'OK';

        modalContent.appendChild(closeButton);
        modalContent.appendChild(winnerText);
        modalContent.appendChild(okButton);
        modal.appendChild(modalContent);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        modal.querySelector('.modal_button-close').addEventListener('click', () => {
            location.reload();
        });

        modal.querySelector('.modal_button-ok').addEventListener('click', () => {
            location.reload();
        });
    }
}
