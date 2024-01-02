
export function getReservationData() {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        return response.json()
        })
}