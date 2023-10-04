import { dispatch, globalState } from "../../store/index";
import { changeSelected } from "../../store/actions";

enum PixelProperties {
    color = "color",
    id = "id"
}

export class Pixel extends HTMLElement {
    properties: Record<PixelProperties, string>= {
        color: "",
        id: ""
    }

    static get observedAttributes() {
        const properties: Record<PixelProperties, null> = {
            color: null,
            id: null
        }
        return Object.keys(properties); 
    }

    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: PixelProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case PixelProperties.color:
                this.properties.color = newValue
                break;
            case PixelProperties.id:
                this.properties.id = newValue
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        console.log(this.properties)
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/pixel/pixel.css")
        //Creation of pixel
        const pixel = this.ownerDocument.createElement("div")
        pixel.classList.add("pixel")
        pixel.style.backgroundColor = `#${this.properties.color}`
        //Adding childs of this.shadowRoot
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(pixel)

        pixel.addEventListener("click", () => {
            dispatch(
                changeSelected(`${this.properties.id}`)
            )
        })
    }
}

customElements.define("grid-pixel", Pixel)