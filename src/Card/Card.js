
function Card({id, name, date, time, number}){
  return (
    <div className="singeCard" data-test='singleCard'>
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time} pm</h3>
      <h3>Number of guests: {number}</h3>
      <button>Cancel</button>
    </div>
  )
}

export default Card
