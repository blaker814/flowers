export const RetailerHTML = (retailer) => {
    return `
        <div class="retailer">
            <h3>${retailer.name}</h3>
            <p>Location: ${retailer.address}<br/>${retailer.city}, ${retailer.state}</p>
        <div>
    `
}