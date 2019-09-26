import { getAllData, addCard, moveCard } from './actions';
const initialState = { columns: [] };
export default (state = initialState, action) => {
    switch (action.type) {
        case getAllData.toString():
            return {
                ...state,
                columns: [
                    {
                        name: 'To Do',
                        cards: [
                            { name: 'cards A' }
                        ]
                    },
                    {
                        name: 'In Progress',
                        cards: [
                            { name: 'cards B' }
                        ]
                    },
                    {
                        name: 'Done',
                        cards: [
                            { name: 'cards C' }
                        ]
                    }
                ]
            }
        case addCard.toString(): {
            const { columnIndex, card } = action.payload;
            const columns = [...state.columns];
            columns[columnIndex].cards.push(card)
            return {
                ...state,
                columns
            }
        }


        case moveCard.toString(): {
            let direction = '';
            if (action.payload.DIRECTION_RIGHT) direction = 1;
            if (action.payload.DIRECTION_LEFT) direction = -1;
            const { columnIndex, cardIndex } = action.payload;
            const columns = [...state.columns];
            const [card] = columns[columnIndex].cards.splice(cardIndex, 1);
            columns[columnIndex + direction].cards.push(card);
            return { ...state, columns };
        }
        default:
            return state;
    }
}