import { sortModeTypes } from "./sortBlendFunctionTypes";

export interface globalStateType {
    selected: string,
    sortMode: sortModeTypes
}

export interface ActionType {
    type: ActionsList;
    payload: string;
}

export enum ActionsList {
    "PIXEL_SELECTED" = "PIXEL_SELECTED",
    "CHANGE_SORTMODE" = "CHANGE_SORTMODE"
}

export type Observer = HTMLElement & { render: () => void}