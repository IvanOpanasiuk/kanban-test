import { createAction } from 'redux-actions';

export const getAllData = createAction('LOAD_ACTION');
export const addCard = createAction('ADD_CARD');
export const moveCard = createAction('MOVE_CARD');