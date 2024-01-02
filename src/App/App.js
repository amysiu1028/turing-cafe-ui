import './App.css';
import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { getReservationData } from '../apiCalls';
import Cards from '../Cards/Cards';

function App() {
  const [ reservations, setReservations ] = useState([])
  const [ error, setError ] = useState("")

  useEffect(() => {
    getReservationData()
    .then(resData => {
      setReservations(resData)
    })
    .catch(error => {
      setError(error)
    }) 
  })

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form/>
      </div>
      <div className='resy-container'>
        <Cards reservations={reservations}/>
      </div>

    </div>
  );
}

export default App; 