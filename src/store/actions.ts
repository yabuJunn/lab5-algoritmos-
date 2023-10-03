import { ActionType, ActionsList } from "../types/store";

export const changeSelected = (payload: string): ActionType => {
    return {
        type: ActionsList.PIXEL_SELECTED,
        payload
    }
}