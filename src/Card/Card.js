
function Card({id, name, date, time, number, deleteReservation}){
  return (
    <div className="singeCard" data-test='singleCard'>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <p>{time} pm</p>
      <h3>Number of guests: {number}</h3>
      <button onClick={() => deleteReservation(id)} data-test='delete-button'>Cancel</button>
    </div>
  )
}

export default Card
