import { getRetailers, useRetailers } from "./RetailerProvider.js"
import { RetailerHTML } from "./Retailer.js"
import { getDistributors, useDistributors } from "../distributors/DistributorProvider.js"

export const RetailerList = () => {
    getRetailers()
        .then(getDistributors)
        .then(() => render(useRetailers(), useDistributors()))
}

const render = (retailers, distributors) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = retailers.map(retailer => {
        const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)
        return RetailerHTML(retailer, distributor)
    }).join("")


    contentTarget.innerHTML += `
        <section>
            <h2>Retailers</h2>
            ${HTMLRep}
        </section>
    `
}