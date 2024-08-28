import { useState } from 'react'
import './App.css'
import reservationData from './assets/reservations.js'
import restaurantData from './assets/restaurants.js'
import customerData from './assets/customers.js'
import { Link, Route, Routes } from 'react-router-dom'
import NavBar from './components/Bar/NavBar.jsx'
import FooterBar from './components/Bar/FooterBar.jsx'
import Home from './components/Pages/Home.jsx'

let type1 = customerData[0]
let type2 = restaurantData[0]

function App() {
  const [user, setUser] = useState(type2)
  const [restaurants, setRestaurants] = useState(restaurantData)
  const [reservations, setReservations] = useState(reservationData)

  // helper functions start here

  // Function to handle search
  const searchRestaurants = (query) => {
    if (query) {
      const filteredRestaurants = restaurantData.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()))
      setRestaurants(filteredRestaurants)
    } else {
      setRestaurants(restaurantData) // Reset to original data if query is empty
    }
  }
  // helper functions end here

  // helper functions collected here in methods object
  const methods = {
    searchRestaurants,
  }

  // Guests, Customers, and Restaurants ALL go to the Home component
  return (
    <>
      <NavBar />
        <Route path='/home' element={<Home user={user} restaurants={restaurants} methods={methods}/>} />
      <FooterBar />
    </>
  )
}
export default App
