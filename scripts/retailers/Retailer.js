export const RetailerHTML = (retailer, distributor, nurseries, nurseryFlowers) => {
    return `
        <div class="retailer">
            <h3>${retailer.name}</h3>
            <p><b>Location:</b> ${retailer.address}<br/>${retailer.city}, ${retailer.state}</p>
            <p><b>Distributor:</b> ${distributor.name}</p>
            <h3><b>Nurseries:</b></h3>
            <ul>
                ${
                    nurseries.map(nursery => `<li>${nursery.name}</li>`).join("")
                }
            </ul>
            <h3><b>Flowers:</b></h3>
            <ul>
                ${
                    nurseryFlowers.map(flowers => {
                        return flowers.map(flower => `<li>${flower.commonName}</li>`).join("")
                    }).join("")
                }
            </ul>
        <div>
    `
}