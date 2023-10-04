import { sortModeTypes } from "./types/sortBlendFunctionTypes"
import "./components/export"
import { Pixel } from "./components/export"

export const sortBlendFunction = (sortMode: sortModeTypes | string, selected: string) => {
    const blendArray: Array<HTMLElement> = []
    if (sortMode === sortModeTypes.Radial) {
        for (let i = 0; i < 100; i++) {
            const pixel = document.createElement("grid-pixel")
            pixel.setAttribute("id", `${i}`)

            if (parseInt(selected) === i) {
                pixel.setAttribute("color", "FF0000")
            }

            if (parseInt(selected) === i-10 || parseInt(selected) === i+10 || parseInt(selected) === i-1 || parseInt(selected) === i+1) {
                pixel.setAttribute("color", "FF4040")
            }

            if (parseInt(selected) === i-20 || parseInt(selected) === i+20 || parseInt(selected) === i-2 || parseInt(selected) === i+2 || parseInt(selected) === i+11 || parseInt(selected) === i+9 || parseInt(selected) === i-11 || parseInt(selected) === i-9) {
                pixel.setAttribute("color", "FF7F7F")
            }

            if (parseInt(selected) === i-30 || parseInt(selected) === i+30 || parseInt(selected) === i-3 || parseInt(selected) === i+3
                || parseInt(selected) === i+8 || parseInt(selected) === i-8 || parseInt(selected) === i+12 || parseInt(selected) === i-12 || parseInt(selected) === i+21 || parseInt(selected) === i-21 || parseInt(selected) === i+19 || parseInt(selected) === i-19
            ) {
                pixel.setAttribute("color", "FFBFBF")
            }

            blendArray.push(pixel)
        }
        return blendArray

    }

    if (sortMode === sortModeTypes.Left) {
        for (let i = 0; i < 100; i++) {
            const pixel = document.createElement("grid-pixel")
            pixel.setAttribute("id", `${i}`)

            if (parseInt(selected) === i) {
                pixel.setAttribute("color", "FF0000")
            }

            if (parseInt(selected) === i+10 ||
                parseInt(selected) === i+20 ||
                parseInt(selected) === i+30 ||
                parseInt(selected) === i+40 ||
                parseInt(selected) === i+50 ||
                parseInt(selected) === i-10 ||
                parseInt(selected) === i-20 ||
                parseInt(selected) === i-30 ||
                parseInt(selected) === i-40 ||
                parseInt(selected) === i-50) {
                pixel.setAttribute("color", "FF4040")
            }

            if (parseInt(selected) === i+1 ||
                parseInt(selected) === i+11 ||
                parseInt(selected) === i+21 ||
                parseInt(selected) === i+31 ||
                parseInt(selected) === i+41 ||
                parseInt(selected) === i+51 ||
                parseInt(selected) === i-9 ||
                parseInt(selected) === i-19 ||
                parseInt(selected) === i-29 ||
                parseInt(selected) === i-39 ||
                parseInt(selected) === i-49) {
                pixel.setAttribute("color", "FF7F7F")
            }

            if (parseInt(selected) === i+2 ||
                parseInt(selected) === i+12 ||
                parseInt(selected) === i+22 ||
                parseInt(selected) === i+32 ||
                parseInt(selected) === i+42 ||
                parseInt(selected) === i+52 ||
                parseInt(selected) === i-8 ||
                parseInt(selected) === i-18 ||
                parseInt(selected) === i-28 ||
                parseInt(selected) === i-38 ||
                parseInt(selected) === i-48) {
                pixel.setAttribute("color", "FFBFBF")
            }
            
            blendArray.push(pixel)
        }

        return blendArray
    }

    if (sortMode === sortModeTypes.Right) {
        for (let i = 0; i < 100; i++) {
            const pixel = document.createElement("grid-pixel")
            pixel.setAttribute("id", `${i}`)

            if (parseInt(selected) === i) {
                pixel.setAttribute("color", "FF0000")
            }

            if (parseInt(selected) === i+10 ||
                parseInt(selected) === i+20 ||
                parseInt(selected) === i+30 ||
                parseInt(selected) === i+40 ||
                parseInt(selected) === i+50 ||
                parseInt(selected) === i-10 ||
                parseInt(selected) === i-20 ||
                parseInt(selected) === i-30 ||
                parseInt(selected) === i-40 ||
                parseInt(selected) === i-50) {
                pixel.setAttribute("color", "FF4040")
            }

            if (parseInt(selected) === i-1 ||
                parseInt(selected) === i-11 ||
                parseInt(selected) === i-21 ||
                parseInt(selected) === i-31 ||
                parseInt(selected) === i-41 ||
                parseInt(selected) === i-51 ||
                parseInt(selected) === i+9 ||
                parseInt(selected) === i+19 ||
                parseInt(selected) === i+29 ||
                parseInt(selected) === i+39 ||
                parseInt(selected) === i+49) {
                pixel.setAttribute("color", "FF7F7F")
            }

            if (parseInt(selected) === i-2 ||
                parseInt(selected) === i-12 ||
                parseInt(selected) === i-22 ||
                parseInt(selected) === i-32 ||
                parseInt(selected) === i-42 ||
                parseInt(selected) === i-52 ||
                parseInt(selected) === i+8 ||
                parseInt(selected) === i+18 ||
                parseInt(selected) === i+28 ||
                parseInt(selected) === i+38 ||
                parseInt(selected) === i+48) {
                pixel.setAttribute("color", "FFBFBF")
            }
            
            blendArray.push(pixel)
        }

        return blendArray
    }

    if (sortMode === sortModeTypes.LShaped) {
        for (let i = 0; i < 100; i++) {
            const pixel = document.createElement("grid-pixel")
            pixel.setAttribute("id", `${i}`)

            if (parseInt(selected) === i) {
                pixel.setAttribute("color", "FF0000")
            }

            if (parseInt(selected) === i+10 ||
                parseInt(selected) === i+20 
                ) {
                pixel.setAttribute("color", "FF4040")
            }

            if (parseInt(selected) === i+30 ||
                parseInt(selected) === i+29
                ) {
                pixel.setAttribute("color", "FF7F7F")
            }

            if (parseInt(selected) === i+28 ||
                parseInt(selected) === i+27
                ) {
                pixel.setAttribute("color", "FFBFBF")
            }
            
            blendArray.push(pixel)
        }

        return blendArray
    }
}

