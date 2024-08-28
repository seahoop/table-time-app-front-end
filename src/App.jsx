import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/Bar/NavBar'
import './App.css'

function App() {
  const [customer, setCustomer] = useState(null)
  const [restaurant, setRestaurant] = useState(null)

  return (
    <>
      <NavBar customer={customer} restaurant={restaurant} />
    </>
  )
}

export default App
