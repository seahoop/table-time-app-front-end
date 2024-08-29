import { useState } from "react"

function SearchBar({ searchRestaurants }) {
  const [inputData, setInputData] = useState('')

  const handleChange = (event) => {
    const newInputData = event.target.value
    setInputData(newInputData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchRestaurants(inputData)
    setInputData('')
  }

  return (
    <>
      <h2>Search for your favorite restaurants!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Restaurant: </label>
        <input
          id="search"
          name="search"
          value={inputData}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SearchBar
