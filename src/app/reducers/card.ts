import {SET_PRISE, SET_AMOUNT, DELETE_AMOUNT, CLEAR_PRISE} from "../actions/actions";
import { IInitialState } from "../page/home/types";

const initialState: IInitialState = {
    itemInCart: getValueItem(),
    allAmount: 0
};

function getValueItem() {
    const items = localStorage.getItem('user');
    return items ? JSON.parse(items) : [];
}

function saveToLocalStoreg(action:any) {
    if (action && (action.type === SET_PRISE || action.type === CLEAR_PRISE)) {
        localStorage.setItem('user', JSON.stringify(action.itemInCart))
    }
}

export function cardReducer(state = initialState, action: any) {
    saveToLocalStoreg(action);
    switch (action.type) {
        case SET_PRISE:
            return {...state, itemInCart: action.itemInCart};
        case CLEAR_PRISE:
            return {...state, itemInCart: action.itemInCart};
        case DELETE_AMOUNT:
            return {...state, allAmount: action.allAmount};
        case SET_AMOUNT:
            return {...state, allAmount: action.allAmount};
        default:
            return state
    }
}
