import { getRetailers, useRetailers } from "./RetailerProvider.js"
import { RetailerHTML } from "./Retailer.js"
import { getDistributors, useDistributors } from "../distributors/DistributorProvider.js"
import { getNurseries, useNurseries } from "../nurseries/NurseryProvider.js"
import { getNurseryFlowers, useNurseryFlowers } from "../nurseries/NurseryFlowerProvider.js"
import { getNurseryDistributors, useNurseryDistributors } from "../nurseries/NuseryDistributorProvider.js"
import { getFlowers, useFlowers } from "../flowers/FlowerProvider.js"

export const RetailerList = () => {
    getRetailers()
        .then(getDistributors)
        .then(getNurseries)
        .then(getNurseryFlowers)
        .then(getNurseryDistributors)
        .then(getFlowers)
        .then(() => render(useRetailers(), useDistributors(), useNurseries(), useNurseryFlowers(), useNurseryDistributors(), useFlowers()))
}

const render = (retailers, distributors, nurseries, nurseryFlowers, nurseryDistributors, flowers) => {
    const contentTarget = document.querySelector("body")
    const HTMLRep = retailers.map(retailer => {
        const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)
        const disNurseries = nurseryDistributors.filter(nd => nd.distributorId === distributor.id)
        const foundNurseries = disNurseries.map(nd => nurseries.find(nursery => nursery.id === nd.nurseryId))
        const nursFlowers = foundNurseries.map(nursery => {
            return nurseryFlowers.filter(nf => nf.nurseryId === nursery.id)
        })
        const foundFlowers = nursFlowers.map(nf => {
            return nf.map(flowerFromNursery => {
                return flowers.find(flower => flower.id === flowerFromNursery.flowerId)
            })
        })
        return RetailerHTML(retailer, distributor, foundNurseries, foundFlowers)
    }).join("")


    contentTarget.innerHTML += `
        <section>
            <h2>Retailers</h2>
            ${HTMLRep}
        </section>
    `
}