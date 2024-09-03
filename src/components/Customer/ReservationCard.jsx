import "./ReservationCard.css"
import EditReservationButton from "../Button/EditReservationButton"
import CancelReservationButton from "../Button/CancelReservationButton"
import SubmitChangesButton from "../Button/SubmitChangesButton"
import CancelChangesButton from "../Button/CancelChangesButton"
import { useState } from "react"
import { editReservation } from "../../services/customer"

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

  const handleSubmitChanges = async () => {
    const customer = await customerMethods.editCustomerReservation(_id, formData)
    customerMethods.setUser(customer)
  }

  return (
    <div className="grid-item">
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
            <p>
              <p>{day}</p><p>{mmdd}</p>
            </p>
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
          <CancelReservationButton onClickCancel={handleCancelChanges} />
        </div>
      ) : <></>
      }
    </div>
  )
}


export default ReservationCard