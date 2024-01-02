import './Cards.css'
import Card from '../Card/Card'

function Cards({reservations}) {
    const displayReserverations = reservations.map((res) => {
        return (<Card
        id={res.id}
        key={res.id}
        date={res.date}
        time={res.time}
        number={res.number}
        />)
    })
  return (
    <div className='cards' data-test='cards'>
      {displayReserverations}
    </div>
  )
}

export default Cards
