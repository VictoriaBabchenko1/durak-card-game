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

        const playerCardsElement = document.createElement('div');
        playerCardsElement.className = 'player__cards';

        playerElement.appendChild(playerInfoElement);
        this.renderPlayerActions(player, playerElement);
        playerElement.appendChild(playerCardsElement);

        this.renderPlayerCards(player, playerCardsElement);
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

        if (player.getMode() !== 'defender') {
            takeCardsButton.disabled = true;
        }

        takeCardsButton.addEventListener('click', () => {
            PlayerController.takeCardsFromPlayingField(player);

            const attacker = PlayerController.getPlayerByMode('attacker')[0];

            PlayerView.updatePlayerCards(player);
            PlayerView.updatePlayerCards(attacker);
            PlayingFieldView.render(PlayingFieldController.fieldCardsPairs);
        });

        return takeCardsButton;
    }

    static renderDoneButton(player) {
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('button_done');

        if (player.getMode() !== 'attacker') {
            doneButton.disabled = true;
        }

        return doneButton;
    }

    // static updateActionButtonsState(player) {
    //     const takeCardsButton = document.querySelector('.button_take-cards');
    //     const doneButton = document.querySelector('.button_done');
    //
    //     const hasCardsOnField = PlayingFieldController.hasCardsOnField();
    //     const hasUnbeatenCard = PlayingFieldController.hasUnbeatenCard();
    //
    //     if (!hasCardsOnField) {
    //         takeCardsButton.disabled = true;
    //         doneButton.disabled = true;
    //     } else {
    //         if (player.getMode() === 'defender' && hasUnbeatenCard) {
    //             takeCardsButton.disabled = false;
    //         } else {
    //             takeCardsButton.disabled = true;
    //         }
    //
    //         if (player.getMode() === 'attacker') {
    //             doneButton.disabled = false;
    //         } else {
    //             doneButton.disabled = true;
    //         }
    //     }
    // }
}
