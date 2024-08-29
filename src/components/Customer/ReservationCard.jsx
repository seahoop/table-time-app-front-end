import ("./ReservationCard.css")
import EditButton from '../Button/EditButton'
import { useState } from 'react'

function ReservationCard(props) {
  const {location, guests, date, time} = props
  const [display, setDisplay] = useState(true)
  return (
    <div className="grid-item">
      <div className='reservation-details'>
      <p>
        {location}
      </p>
      <img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" alt="guest-icon" />
      <p>
        {guests}
      </p>
      <p>
        {date}
      </p>
      <p>
        {time}
      </p>
      </div>
      <div className='reservation-buttons'>
        <EditButton display={display} setDisplay={setDisplay}/>
      </div>
    </div>
  )
}


export default ReservationCard