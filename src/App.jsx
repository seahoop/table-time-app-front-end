import { useState } from 'react'
import './App.css'
import CustomerDashboard from './components/Customer/CustomerDashboard'
import reservationData from './assets/reservations.js'
import restaurantData from './assets/restaurants.js'
import SearchBar from './components/Customer/SearchBar.jsx'

function App() {
  const [restaurants, setRestaurants] = useState(restaurantData)
  const [reservations, setReservations] = useState(reservationData)

  // Function to handle search
  const searchRestaurants = (query) => {
    if (query) {
      const filteredRestaurants = restaurantData.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      )
      setRestaurants(filteredRestaurants)
    } else {
      setRestaurants(restaurantData) // Reset to original data if query is empty
    }
  }

  return (
    <>
      <SearchBar searchRestaurants={searchRestaurants} />
      <CustomerDashboard restaurants={restaurants} reservations={reservations} />
    </>
  )
}

export default App
