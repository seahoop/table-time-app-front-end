import("./ReservationCard.css")

function ReservationCard({ location, guests, date, time }) {
  const thisDay = new Date(date)
  const day = thisDay.toLocaleDateString('en-US',{weekday: 'short'})
  const mmdd = thisDay.toLocaleDateString('en-US',{month: '2-digit', day: '2-digit'})

  return (
    <div className="grid-item">
      <div>
        <p>
          {location}
        </p>
      </div>

      <div>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" alt="guest-icon" />
        <p>
          {guests}
        </p>
        <p>
          <p>{day}</p><p>{mmdd}</p>
        </p>
        <p>
          {time}
        </p>
      </div>
      <div>
        <button>Edit</button>
        <button>Cancel</button>
      </div>
    </div>
  )
}


export default ReservationCard