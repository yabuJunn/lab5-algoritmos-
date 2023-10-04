import "./components/export"
import { dataBoard } from "./dataBoard"
import { globalState } from "./store/index"
import { sortModeTypes } from "./types/sortBlendFunctionTypes"
import { addObserver } from "./store/index"

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)

    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/appContainer.css")
            //Creation main component
            const mainContainer = this.ownerDocument.createElement("section")
            mainContainer.classList.add("boardContainer")
            //Creation of childs

            //Adding childs of main component
            dataBoard.map((dataElement) => {
                const board = this.ownerDocument.createElement("board-board")
                board.setAttribute("title", `${dataElement.title}`)
                board.setAttribute("grid", `${dataElement.grid}`)
                mainContainer.appendChild(board)
            })
            const buttonsContainer = this.ownerDocument.createElement("div")
            buttonsContainer.setAttribute("id", "buttonsContainer")
            //Elements of buttonsContainer
            const radialButton = this.ownerDocument.createElement("sort-button")
            radialButton.setAttribute("icon", "/src/resources/svg/iconRadial.svg")
            radialButton.setAttribute("blendMode", `${sortModeTypes.Radial}`)
            radialButton.setAttribute("currentMode", `${globalState.sortMode}`)
            buttonsContainer.appendChild(radialButton)

            const leftButton = this.ownerDocument.createElement("sort-button")
            leftButton.setAttribute("icon", "/src/resources/svg/iconLeft.svg")
            leftButton.setAttribute("blendMode", `${sortModeTypes.Left}`)
            leftButton.setAttribute("currentMode", `${globalState.sortMode}`)
            buttonsContainer.appendChild(leftButton)

            const rightButton = this.ownerDocument.createElement("sort-button")
            rightButton.setAttribute("icon", "/src/resources/svg/iconRight.svg")
            rightButton.setAttribute("blendMode", `${sortModeTypes.Right}`)
            rightButton.setAttribute("currentMode", `${globalState.sortMode}`)
            buttonsContainer.appendChild(rightButton)

            const L_ShapedButton = this.ownerDocument.createElement("sort-button")
            L_ShapedButton.setAttribute("icon", "/src/resources/svg/iconLShaped.svg")
            L_ShapedButton.setAttribute("blendMode", `${sortModeTypes.LShaped}`)
            L_ShapedButton.setAttribute("currentMode", `${globalState.sortMode}`)
            buttonsContainer.appendChild(L_ShapedButton)
            //Adding childs of this.shadowRoot
            this.shadowRoot?.appendChild(link)
            this.shadowRoot?.appendChild(mainContainer)
            this.shadowRoot?.appendChild(buttonsContainer)

        }
    }
}

customElements.define("app-container", AppContainer)