import("./ReservationCard.css")

function ReservationCard(props) {
  const { location, guests, date, time, helpers } = props
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
          {date}
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