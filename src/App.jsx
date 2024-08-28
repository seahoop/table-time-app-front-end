import { useState } from 'react'
import './App.css'
import CustomerDashboard from './components/Customer/CustomerDashboard'
import reservationData from './assets/reservations.js'
import restaurantData from './assets/restaurants.js'
import SearchBar from './components/Customer/SearchBar.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import NavBar from './components/Bar/NavBar.jsx'
import FooterBar from './components/Bar/FooterBar.jsx'

function App() {
  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] = useState(restaurantData)
  const [reservations, setReservations] = useState(reservationData)

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

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<CustomerDashboard restaurants={restaurants}/>} />
        <Route path='/dashboard' element={<CustomerDashboard restaurants={restaurants} reservations={reservations}/>} />
      </Routes>
      <FooterBar />
    </>
  )
}
export default App
