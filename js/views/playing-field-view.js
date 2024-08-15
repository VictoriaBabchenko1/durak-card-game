class PlayingFieldView {
    static render(cardsPairs) {
        const fieldElement = document.querySelector('.field-container');
        fieldElement.innerHTML = '';

        cardsPairs.forEach(pair => {
            const cardPairElement = document.createElement('div');
            cardPairElement.className = 'card-pair';

            if (pair.attackerCard) {
                const attackerCardElement = CardView.render(pair.attackerCard, cardPairElement);
                attackerCardElement.classList.add('card_attacker');
            }

            if (pair.defenderCard) {
                const defenderCardElement = CardView.render(pair.defenderCard, cardPairElement);
                defenderCardElement.classList.add('card_defender');
            }

            fieldElement.appendChild(cardPairElement);
        });
    }
}