import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/Bar/NavBar'
import './App.css'
import CustomerDashboard from './components/Customer/CustomerDashboard'

function App() {
  const [customerUser, setCustomerUser] = useState(null)
  const [restaurantUser, setRestaurantUser] = useState(null)
  const [restaurants, setRestaurants] = useState(null)

  return (
    <>
      {/* <NavBar customer={customer} restaurant={restaurant} /> */}
      <CustomerDashboard restaurants={restaurants} />
    </>
  )
}

export default App
