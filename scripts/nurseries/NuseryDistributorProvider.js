let nurseryDistributors = [];

export const useNurseryDistributors = () => [...nurseryDistributors];

export const getNurseryDistributors = () => {
    return fetch("http://localhost:8088/nurseryDistributors")
    .then(response => response.json())
    .then(parsedNurseryDistributors => nurseryDistributors = parsedNurseryDistributors)
}