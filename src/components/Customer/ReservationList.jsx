import ReservationCard from "./ReservationCard"
import ("./ReservationList.css")

function ReservationList(props) {
  const { reservations } = props

  return (
    <div className="grid-container">
      {reservations.map((reservation) => {
        return <ReservationCard location={reservation.location} guests={reservation.guests} date={reservation.date} time={reservation.time} key={reservation.location + reservation.guests + reservation.time} />
      })}
    </div>
  )
}

export default ReservationList