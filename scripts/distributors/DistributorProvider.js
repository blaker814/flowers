let distributors = [];

export const useDistributors = () => [...distributors];

export const getDistributors = () => {
    return fetch("http://localhost:8088/distributors")
    .then(response => response.json())
    .then(parsedDistributors => distributors = parsedDistributors)
}