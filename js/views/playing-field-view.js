class PlayingFieldView {
    static render(cardsPairs) {
        const fieldElement = document.querySelector('.field-container');
        fieldElement.innerHTML = '';

        cardsPairs.forEach(pair => {
            const cardPairElement = document.createElement('div');
            cardPairElement.className = 'card-pair';

            if (pair.getAttackerCard()) {
                const attackerCardElement = CardView.render(pair.getAttackerCard(), cardPairElement);
                attackerCardElement.classList.add('card_attacker');

                attackerCardElement.addEventListener('click', () => {
                    this.handlePlayingFieldCardClick(pair, pair.getAttackerCard(), attackerCardElement);
                });
            }

            if (pair.getDefenderCard()) {
                const defenderCardElement = CardView.render(pair.getDefenderCard(), cardPairElement);
                defenderCardElement.classList.add('card_defender');
            }

            fieldElement.appendChild(cardPairElement);
        });
    }

    static handlePlayingFieldCardClick(pair, card, cardElement) {
        const selectedPlayer = PlayerController.getPlayerByMode('defender')[0];
        const selectedCard = selectedPlayer.getSelectedCard();

        if (selectedCard) {
            PlayingFieldController.addCardToField(selectedCard, pair, selectedPlayer);
            CardView.toggleSelect(cardElement);
        }
    }
}