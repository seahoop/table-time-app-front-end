import ReservationCard from "./ReservationCard"

function ReservationList({ reservations, customerMethods }) {

  return (
    <div className="reservations-container">
      {reservations.map((reservation) => {
        return <ReservationCard reservation={reservation} key={reservation.location + reservation.guests + reservation.time} customerMethods={customerMethods} />
      })}
    </div>
  )
}

export default ReservationList