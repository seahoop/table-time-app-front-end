import ReservationCard from "./ReservationCard"

function ReservationList(props) {
  const { reservations, helpers } = props

  return (
    <div className="grid-container">
      {reservations.map((reservation) => {
        return <ReservationCard location={reservation.location} guests={reservation.guests} date={reservation.date} time={reservation.time} key={reservation.location + reservation.guests + reservation.time} helpers={helpers}/>
      })}
    </div>
  )
}

export default ReservationList