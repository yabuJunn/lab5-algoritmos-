import { ActionType, ActionsList } from "../types/store";

export const changeSelected = (payload: string): ActionType => {
    return {
        type: ActionsList.PIXEL_SELECTED,
        payload
    }
}

export const changeSortMode = (payload: string): ActionType => {
    return {
        type: ActionsList.CHANGE_SORTMODE,
        payload
    }
}