import './Form.css'
import { useState } from 'react';

function Form({postData}) {
    const [ name, setName ] = useState("")
    const [ date, setDate ] = useState("")
    const [ time, setTime ] = useState("")
    const [ number, setNumber ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    function makeReservation(event) {
        event.preventDefault()
        if ( name === '' || date === '' || time === '' || number === '') {
            setErrorMessage('Please fill out all input fields')
            return;
        }
        const newRes = {
            id: Date.now(),
            name,
            date,
            time,
            number
        }
        console.log("newRes in FORM", newRes)
        postData(newRes)
        clearInputs()
    }

    function clearInputs() {
        setName('')
        setDate('')
        setTime('')
        setNumber('')
    }

  return (
    <form>
      {/* <label>Name:</label> */}
      <input
      data-test='name'
      type='text'
      placeholder='Name'
      name='name'
      value={name}
      onChange={(e) => setName(e.target.value)}
      ></input>

    {/* <label>Date:</label> */}
      <input
      data-test='date'
      type='text'
      placeholder='Date (mm/dd)'
      name='date'
      value={date}
      onChange={(e) => setDate(e.target.value)}
      ></input>

    {/* <label>Time:</label> */}
      <input
      data-test='time'
      type='text'
      placeholder='Time'
      name='time'
      value={time}
      onChange={(e) => setTime(e.target.value)}
      ></input>

    {/* <label>Name:</label> */}
      <input
      data-test='guestnumber'
      type='number'
      placeholder='Number of guests'
      name='number'
      value={number}
      onChange={(e) => setNumber(e.target.value)}
      ></input>

    {errorMessage && <h2 className='errorMessage' data-test='errorMessage'>{errorMessage}</h2>}

      <button data-test='add-button' type="button" onClick={(event) => makeReservation(event)}>Make Reservation</button>
    </form>
  )
}

export default Form
