import EditReservationButton from "../Button/EditReservationButton"
import CancelReservationButton from "../Button/CancelReservationButton"
import SubmitChangesButton from "../Button/SubmitChangesButton"
import CancelChangesButton from "../Button/CancelChangesButton"
import { useState } from "react"

function ReservationCard({ reservation, customerMethods }) {
  const { location, guests, date, time, _id } = reservation
  const [isEditing, setIsEditing] = useState(null)
  const [formData, setFormData] = useState({ guests, date, time })

  const thisDay = new Date(date)
  const day = thisDay.toLocaleDateString('en-US', { weekday: 'short' })
  const mmdd = thisDay.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleCancelChanges = () => {
    setIsEditing(false)
    setFormData({ guests, date, time })
  }

  const handleChangeFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmitChanges = () => {
    const customer = customerMethods.editCustomerReservation(_id, formData)
    customerMethods.setUser(customer)
    setIsEditing(false)
  }

  const handleCancelReservation = () => {
    const customer = customerMethods.cancelCustomerReservation(_id)
    customerMethods.setUser(customer)
  }

  return (
    <div className="reservations-item">
      <div>
        <p>
          {location}
        </p>
      </div>
      <div>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" alt="guest-icon" />
        {!isEditing ? (
          <>
            <p>{guests}</p>
            <div>
              <p>{day}</p><p>{mmdd}</p>
            </div>
            <p>{time}</p>
          </>
        ) : (
          <form>
            <div>
              <label>Guests</label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChangeFormData}
                min="1"
              />
            </div>
            <div>
              <label>Date (YYYY-MM-DD)</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChangeFormData}
              />
            </div>
            <div>
              <label>Time (HH:MM)</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChangeFormData}
                placeholder="HH:MM"
              />
            </div>
            <div>
              <SubmitChangesButton onClickSubmit={handleSubmitChanges} />
              <CancelChangesButton onClickCancel={handleCancelChanges} />
            </div>
          </form>
        )}
      </div>
      {!isEditing ? (
        <div>
          <EditReservationButton onClickEdit={handleEditClick} />
          <CancelReservationButton onClickCancel={handleCancelReservation} />
        </div>
      ) : <></>
      }
    </div>
  )
}


export default ReservationCard