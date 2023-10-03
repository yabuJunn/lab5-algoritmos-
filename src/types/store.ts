export interface globalStateType {
    selected: string
}

export interface ActionType {
    type: ActionsList;
    payload: string;
}

export enum ActionsList {
    "PIXEL_SELECTED" = "PIXEL_SELECTED"
}

export type Observer = HTMLElement & { render: () => void}