import "../export"
import { globalState, addObserver } from "../../store/index";

const enum BoardGridProperties {
    grid = "grid"
}

export class BoardGrid extends HTMLElement {
    properties: Record<BoardGridProperties, string> = {
        grid: ""
    }

    static get observedAttributes() {
        const properties: Record<BoardGridProperties, null> = {
            grid: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    attributeChangedCallback(propName: BoardGridProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case BoardGridProperties.grid:
                this.properties.grid = newValue
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/components/grid/grid.css")
            //Creation of mainContainer
            const pixelContainer = this.ownerDocument.createElement("div")
            pixelContainer.classList.add("gridContainer")
            //Creation of childs
            for (let i = 0; i < parseInt(this.properties.grid); i++) {
                const pixel = this.ownerDocument.createElement("grid-pixel")
                pixel.setAttribute("id", `${i}`)
                if (parseInt(globalState.selected) === i) {
                    pixel.setAttribute("color", "red")
                } else {
                    pixel.setAttribute("color", "white")
                }
                pixelContainer.appendChild(pixel)
            }
            //Adding childs of this.shadowRoot
            this.shadowRoot?.appendChild(link)
            this.shadowRoot?.appendChild(pixelContainer)

        }
    }
}

customElements.define("board-grid", BoardGrid)