import { globalStateType, ActionType, ActionsList } from "../types/store";

export const reducer = (action: ActionType, currentState: globalStateType) => {
    switch (action.type) {
        case ActionsList.PIXEL_SELECTED:
            return {
                ...currentState,
                selected: action.payload
            }
        default:
            return currentState
    }
}