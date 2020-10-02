let nurseryFlowers = [];

export const useNurseryFlowers = () => [...nurseryFlowers];

export const getNurseryFlowers = () => {
    return fetch("http://localhost:8088/nurseryFlowers")
    .then(response => response.json())
    .then(parsedNurseryFlowers => nurseryFlowers = parsedNurseryFlowers)
}