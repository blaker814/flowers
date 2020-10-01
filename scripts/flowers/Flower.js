export const FlowerHTML = (flower) => {
    return `
        <div class="flower">
            <h3>${flower.commonName}</h3>
            <p>Color: ${flower.color}</p>
        <div>
    `
}