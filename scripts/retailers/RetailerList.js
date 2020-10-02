import { getRetailers, useRetailers } from "./RetailerProvider.js"
import { RetailerHTML } from "./Retailer.js"

export const RetailerList = () => {
    getRetailers().then(() => render(useRetailers()))
}

const render = (retailers) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = retailers.map(retailer => RetailerHTML(retailer)).join("")

    contentTarget.innerHTML += `
        <section>
            <h2>Retailers</h2>
            ${HTMLRep}
        </section>
    `
}