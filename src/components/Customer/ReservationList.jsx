import ReservationCard from "./ReservationCard"
import("./ReservationList.css")

function ReservationList({ reservations, customerMethods }) {

  return (
    <div className="grid-container">
      {reservations.map((reservation) => {
        return <ReservationCard reservation={reservation} key={reservation.location + reservation.guests + reservation.time} customerMethods={customerMethods} />
      })}
    </div>
  )
}

export default ReservationList