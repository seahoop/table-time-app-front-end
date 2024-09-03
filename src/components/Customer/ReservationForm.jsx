import EditButton from "../Button/EditButton"
import DeleteButton from '../Button/DeleteButton'
import Submit from "../Button/Submit"
import { useState } from "react"

function ReservationForm() {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className="grid-item">
            <p>
                {location}
            </p>
            <form className="reservation-details">
                <label>
                    Guests:
                    <input type="number" name="guests" value={input} onChange={handleChange} />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={input} onChange={handleChange} />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" value={input} onChange={handleChange} />
                </label>
            </form>
            <div className="reservation-buttons">
                <EditButton display={display} setDisplay={setDisplay} />
            </div>
        </div>

    )
}

export default ReservationForm