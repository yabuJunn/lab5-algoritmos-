import { sortModeTypes } from "../../types/sortBlendFunctionTypes";
import { globalState, dispatch } from "../../store/index";
import { changeSortMode } from "../../store/actions";

const enum sortButtonProperties {
    icon = "icon",
    blendMode = "blendmode",
    currentMode = "currentmode"
}

export class sortButton extends HTMLElement {
    properties: Record<sortButtonProperties, string> = {
        icon: "",
        blendmode: "",
        currentmode: ""
    }
    
    static get observedAttributes() {
        const properties: Record<sortButtonProperties, null> = {
            icon: null,
            blendmode: null,
            currentmode: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: sortButtonProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case sortButtonProperties.icon:
                this.properties.icon = newValue
                break;
            case sortButtonProperties.blendMode:
                this.properties.blendmode = newValue
                break;
            case sortButtonProperties.currentMode:
                this.properties.currentmode = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/sortButton/sortButton.css")
        //Creation of father
        const button = this.ownerDocument.createElement("div")
        button.classList.add("modeButton")
        if (this.properties.blendmode === globalState.sortMode) {
            button.classList.add("modeButtonSelected")
        }
            //Creation of childs
            const icon = this.ownerDocument.createElement("img")
            icon.setAttribute("src", `${this.properties.icon}`)
            const title = this.ownerDocument.createElement("p")
            title.innerText = `${this.properties.blendmode}`
            //Adding childs of father
            button.appendChild(icon)
            button.appendChild(title)
        //Adding childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(button)

        button.addEventListener("click", () => {
            console.log(this.properties.blendmode)
            dispatch(
                changeSortMode(`${this.properties.blendmode}`)
            )
        })
    }
}

customElements.define("sort-button", sortButton)