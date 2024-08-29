import ReservationCard from "./ReservationCard"
import ReservationForm from "./ReservationForm"
import { useState } from "react"

function ReservationInformation() {
    const [display, setDisplay] = useState(true)
  return (
    <>
    {display ? <ReservationCard/> : <ReservationForm />}
    </>
  )
}

export default ReservationInformation