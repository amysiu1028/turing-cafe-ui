
export function getReservationData() {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        return response.json()
        })
}

export function postReservationData(newRes) {
    return fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRes),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json(); 
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
  }