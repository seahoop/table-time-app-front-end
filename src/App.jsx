import { useState } from 'react'
import './App.css'
import reservationData from './assets/reservations.js'
import restaurantData from './assets/restaurants.js'
import customerData from './assets/customers.js'
import { Link, Route, Routes } from 'react-router-dom'
import NavBar from './components/Bar/NavBar.jsx'
import FooterBar from './components/Bar/FooterBar.jsx'
import Home from './components/Pages/Home.jsx'

// Rodney Testing Imports
import CustomerDashboard from './components/Customer/CustomerDashboard.jsx'
import RestaurantDashboard from './components/Restaurant/RestaurantDashboard.jsx'

// Eric Testing Imports
import LandingPage from './components/admin/landingPage.jsx'
import SignUp from './components/admin/signUp.jsx'
import SignIn from './components/admin/signIn.jsx'
import AdminPanel from './components/admin/adminPanel.jsx'

// Ismael Testing Imports



let type1 = customerData[0]
let type2 = restaurantData[0]

function App() {
  const [user, setUser] = useState(type1)
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
    
    // Rodney Testing
    <CustomerDashboard restaurants={restaurants} user={user} searchRestaurants={searchRestaurants} />



    // Eric Testing
    
    // <div className="landingPage">
    //   <Routes>
      
    //     <Route path="/admin" exact element={<LandingPage />} />
        
    //     <Route path="/admin/signUp" element={<SignUp />} />

    //     <Route path="/admin/signIn" element={<SignIn />} />
      
    //     <Route path="/admin/adminPanel" element={<AdminPanel/>} />

    //   </Routes>
    // </div>

    

    
 




    // Ismael Testing
    <>
      <Routes>
        <Route path='/' element={<CustomerDashboard restaurants={restaurantData} user={user} searchRestaurants={searchRestaurants}/>} />
      </Routes>
    </>
  )
}


export default App
