import './Form.css'
import { useState } from 'react';

function Form() {
    const [ name, setName ] = useState("")
    const [ date, setDate ] = useState("")
    const [ time, setTime ] = useState("")
    const [ guestNumber, setGuestNumber ] = useState("")

  return (
    <form>
      {/* <label>Name:</label> */}
      <input
      type='text'
      placeholder='Name'
      name='name'
      value={name}
      onChange={(e) => setName(e.target.value)}
      ></input>

    {/* <label>Date:</label> */}
      <input
      type='text'
      placeholder='Date (mm/dd)'
      name='date'
      value={date}
      onChange={(e) => setDate(e.target.value)}
      ></input>

    {/* <label>Time:</label> */}
      <input
      type='text'
      placeholder='Time'
      name='time'
      value={time}
      onChange={(e) => setTime(e.target.value)}
      ></input>

    {/* <label>Name:</label> */}
      <input
      type='text'
      placeholder='Number of guests'
      name='guestNumber'
      value={guestNumber}
      onChange={(e) => setGuestNumber(e.target.value)}
      ></input>

      <button>Make Reservation</button>
    </form>
  )
}

export default Form
