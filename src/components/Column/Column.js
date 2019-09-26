import React from 'react';
import Card from '../Card';

export default ({
    column,
    columnIndex,
    onMoveLeft,
    onMoveRight,
    onAddCard
}) => (
        <div className='column'>
            <h1>{column.name}</h1>
            {
                column.cards.map((card, cardIndex) => (
                    <Card
                        card={card}
                        key={cardIndex}
                        cardIndex={cardIndex}
                        canMoveLeft={columnIndex !== 0}
                        canMoveRight={columnIndex !== 2}
                        onMoveLeft={() => onMoveLeft(cardIndex)}
                        onMoveRight={() => onMoveRight(cardIndex)}
                    />

                ))

            }
            <button onClick={onAddCard}>+ Add another card</button>
        </div >
    )