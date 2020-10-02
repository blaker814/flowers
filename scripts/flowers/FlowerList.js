import { getFlowers, useFlowers } from "./FlowerProvider.js"
import { FlowerHTML } from "./Flower.js"

export const FlowerList = () => {
    getFlowers().then(() => render(useFlowers()))
}

const render = (flowers) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = flowers.map(flower => FlowerHTML(flower)).join("")

    contentTarget.innerHTML += `
        <section>
            <h2>Flowers</h2>
            ${HTMLRep}
        </section>
    `
}