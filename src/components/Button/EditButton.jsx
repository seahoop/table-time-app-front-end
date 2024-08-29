function EditButton({ display, setDisplay }) {

  const handleClick = async () => {
    setDisplay(!display)
  }
  return (
    <button onClick={handleClick}>Edit</button>
  )
}

export default EditButton