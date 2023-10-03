import "../export"

const enum BoardProperties {
    title = "title",
    grid = "grid"
}

export class Board extends HTMLElement {
    properties: Record<BoardProperties, string> = {
        title: "",
        grid: ""
    }
    
    static get observedAttributes() {
        const properties: Record<BoardProperties, null> = {
            title: null,
            grid: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: BoardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case BoardProperties.title:
                this.properties.title = newValue
                break;
            case BoardProperties.grid: 
                this.properties.grid = newValue
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
        link.setAttribute("href", "/src/components/board/board.css")
        //Creation of mainContainer
        const container = this.ownerDocument.createElement("div")
        container.classList.add("boardContainer")
            //Creation of childs
            const title = this.ownerDocument.createElement("h1")
            title.textContent = this.properties.title
            const grid = this.ownerDocument.createElement("board-grid")
            grid.setAttribute("grid", `${this.properties.grid}`)
            //Adding childs of mainContainer
            container.appendChild(title)
            container.appendChild(grid)
        //Adding childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(container)
    }
}

customElements.define("board-board", Board)