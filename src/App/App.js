import './App.css';
import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { getReservationData, postReservationData } from '../apiCalls';
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
  },[])

  //post idea
  // function postData(newRes) {
  //   setReservations([...reservations,newRes])
  // }

  function postData(newRes) {
    postReservationData(newRes)
    .then(newRes => {
      console.log("newRes",newRes)
      console.log("res",reservations)
      setReservations(reservations => [...reservations,newRes])
    })
  }

  function deleteReservation(id) {
    const restOfReservations = reservations.filter((res) => {
      return res.id !== id
    })
    setReservations(restOfReservations)
  }

  return (
    <div className="App">
      { error ? <h2 data-test='error'>{`${error}`}</h2> 
      : (
        <div>
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
            <Form postData={postData}/>
          </div>
          <div className='resy-container'>
            <Cards reservations={reservations} deleteReservation={deleteReservation}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 