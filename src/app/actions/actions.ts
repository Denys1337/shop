import { IProduct } from "../page/home/types";

export const SET_PRISE = 'SET_PRISE';
export const SET_AMOUNT = 'SET_AMOUNT';
export const DELETE_AMOUNT = 'DELETE_AMOUNT';
export const CLEAR_PRISE = 'CLEAR_PRISE';

export function setItemsInCart(item: IProduct) {
    return {
        type: SET_PRISE,
        itemInCart: item,
    }
}
export function clearPrice() {
    return {
        type: CLEAR_PRISE,
        itemInCart: [],
    }
}
export function setAmount(item: IProduct) {
    return {
        type: SET_AMOUNT,
        allAmount: item,
    }
}

export function deleteAmount() {
    return {
        type: DELETE_AMOUNT,
        allAmount: 0,
    }
}
