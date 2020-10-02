let nurseries = [];

export const useNurseries = () => [...nurseries];

export const getNurseries = () => {
    return fetch("http://localhost:8088/nurseries")
    .then(response => response.json())
    .then(parsedNurseries => nurseries = parsedNurseries)
}