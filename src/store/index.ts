import { globalStateType, ActionType, ActionsList, Observer } from "../types/store"
import { reducer } from "./reducer"
import { sortModeTypes } from "../types/sortBlendFunctionTypes"


export let globalState: globalStateType = {
    selected: "",
    sortMode: "Radial"
}

const observers: Observer[] = []

export const dispatch = (action: ActionType) => {
    const clone = JSON.parse(JSON.stringify(globalState))
    globalState = reducer(action, clone)
    observers.forEach((o: Observer) => o.render())
    console.log(globalState.selected)
}

export const addObserver = (observer: Observer) => {
    observers.push(observer)
}