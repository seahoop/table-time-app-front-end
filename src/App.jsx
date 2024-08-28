import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/Bar/NavBar'
import './App.css'
import CustomerDashboard from './components/Customer/CustomerDashboard'
import reservationData from './assets/reservations.js'
import restaurantData from './assets/restaurants.js'

function App() {
  const [customerUser, setCustomerUser] = useState(null)
  const [restaurantUser, setRestaurantUser] = useState(null)
  const [restaurants, setRestaurants] = useState(restaurantData)
  const [reservations, setReservations] = useState(reservationData)

  return (
    <>
      {/* <NavBar customer={customer} restaurant={restaurant} /> */}
      <CustomerDashboard restaurants={restaurants} reservations={reservations}/>
    </>
  )
}

export default App
