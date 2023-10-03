import "./components/export"
import { dataBoard } from "./dataBoard"

class AppContainer extends HTMLElement{
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/appContainer.css")
        //Creation main component
        const mainContainer = this.ownerDocument.createElement("section")
        //Creation of childs
            
        //Adding childs of main component
            dataBoard.map( (dataElement) => {
                const board = this.ownerDocument.createElement("board-board")
                board.setAttribute("title", `${dataElement.title}`)
                board.setAttribute("grid", `${dataElement.grid}`)
                mainContainer.appendChild(board)
            })
        //Adding childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(mainContainer)
    }
}

customElements.define("app-container", AppContainer)