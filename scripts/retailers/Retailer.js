export const RetailerHTML = (retailer, distributor) => {
    return `
        <div class="retailer">
            <h3>${retailer.name}</h3>
            <p><b>Location:</b> ${retailer.address}<br/>${retailer.city}, ${retailer.state}</p>
            <p><b>Distributor:</b> ${distributor.name}</p>
        <div>
    `
}