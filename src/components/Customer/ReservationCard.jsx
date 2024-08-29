function ReservationCard(props) {
  const {location, guests, date, time} = props
  return (
  
   
    <div className="grid-item">
      <p>
        {location}
      </p>
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
  )
  
}


export default ReservationCard