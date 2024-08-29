function EditButton({ customerId, reservationid, helper }) {

  const handleClick = async () => {
    // const response = await editReservation(customerId, reservationId)
    // helper(response)
  }

  return (
    <button onClick={handleClick}>Edit</button>
  )
}

export default EditButton