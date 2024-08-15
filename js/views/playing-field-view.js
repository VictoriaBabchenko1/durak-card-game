class PlayingFieldView {
    static render(cardsPairs) {
        const fieldContainer = document.querySelector('.field-container');
        fieldContainer.innerHTML = '';

        cardsPairs.forEach(pair => {
            const pairContainer = document.createElement('div');
            pairContainer.className = 'card-pair';

            if (pair.attackerCard) {
                CardView.render(pair.attackerCard, pairContainer);
            }

            if (pair.defenderCard) {
                CardView.render(pair.defenderCard, pairContainer);
            }

            fieldContainer.appendChild(pairContainer);
        });
    }
}