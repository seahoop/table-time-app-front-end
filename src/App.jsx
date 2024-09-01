import { useState, useEffect } from 'react'
import './App.css'
import reservationData from './assets/reservations.js'
import restaurantData from './assets/restaurants.js'
import customerData from './assets/customers.js'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './components/Bar/LandingNavBar.jsx'
import FooterBar from './components/Bar/FooterBar.jsx'
import Home from './components/Pages/Home.jsx'

// Rodney Testing Imports
import CustomerDashboard from './components/Customer/CustomerDashboard.jsx'
import RestaurantDashboard from './components/Restaurant/RestaurantDashboard.jsx'

// Eric Testing Imports
// import LandingPage from './components/admin/landingPage.jsx'
// import SignUp from './components/admin/signUp.jsx'
// import SignIn from './components/admin/signIn.jsx'
// import AdminPanel from './components/admin/adminPanel.jsx'

// Ismael Testing Imports
// import { getUser, signout } from './services/customer.js'
import SignUpCustomer from "./components/Authorization/SignUpCustomer.jsx"
import SignIn from './components/Authorization/SignIn.jsx'
import LandingPage from './components/Pages/LandingPage.jsx'
import { showRestaurants } from './services/restaurant.js'
import { getUser, getVisitorType, signout } from './services/auth.js'

function App() {
  const [visitorType, setVisitorType] = useState(getVisitorType())
  const [user, setUser] = useState(getUser())
  const [restaurants, setRestaurants] = useState([])
  const [reservations, setReservations] = useState(reservationData)
  const navigate = useNavigate()

  useEffect(() => {
    // fetch all restaurants in database
    // maybe do this in landing page instead
    showRestaurants()
      .then((allRestaurants) => setRestaurants(allRestaurants))

  }, [visitorType, user])


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
  
  const handleSignOut = () => {
    signout()
    setVisitorType(getVisitorType())
    setUser(getUser())
    navigate('/')
  }
  // helper functions end here

  const handleUserAndVisitorType = ({user, visitorType}) => {
    setUser(user)
    setVisitorType(visitorType)
  }
  // helper functions collected here in methods object
  const methods = {
    searchRestaurants,
    handleSignOut
  }

  // Guests, Customers, and Restaurants ALL go to the Home component
  return (

    // Rodney Testing
    // <CustomerDashboard restaurants={restaurants} user={user} searchRestaurants={searchRestaurants} />



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
      <NavBar methods={methods} />
      <Routes>
        <Route path='/' element={<LandingPage
          visitorType={visitorType}
          restaurants={restaurants}
          searchRestaurants={searchRestaurants}
        />} />
        <Route path='/customers/signup' element={<SignUpCustomer />} />
        <Route path='/signin' element={<SignIn handleUserAndVisitorType={handleUserAndVisitorType}/>} />
        <Route path='/customers/dashboard' element={<CustomerDashboard
          restaurants={restaurants}
          user={user}
          searchRestaurants={searchRestaurants} />} />
        {/* Do this with every restaurant and use fetch */}
        {/* <Route path='/customers/restaurants/:restaurantId' element={<RestaurantDashboard />} /> */}
        <Route path='/restaurants/dashboard' element={<RestaurantDashboard
          restaurant={user}
        />} />
      </Routes>
    </>
  )
}


export default App
