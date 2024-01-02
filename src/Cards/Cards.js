import './Cards.css'
import Card from '../Card/Card'

function Cards({reservations, deleteReservation}) {
    const displayReserverations = reservations.map((res) => {
        return (<Card
        id={res.id}
        key={res.id}
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
        deleteReservation={deleteReservation}
        />)
    })
  return (
    <div className='cards' data-test='cards'>
      {displayReserverations}
    </div>
  )
}

export default Cards
