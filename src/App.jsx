import { useState, useEffect } from 'react'
import './App.css'
import reservationData from './assets/reservations.js'
import restaurantData from './assets/restaurants.js'
import customerData from './assets/customers.js'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './components/Bar/NavBar.jsx'
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
import SignInCustomer from './components/Authorization/SignInCustomer.jsx'
import LandingPage from './components/Pages/LandingPage.jsx'
import { showRestaurants, showARestaurant } from './services/restaurant.js'
import { getRestaurantPage } from './services/customer.js'
import { getUser, getVisitorType, signout } from './services/auth.js'
import SignUpRestaurant from './components/Authorization/SignUpRestaurant.jsx'
import SignInRestaurant from './components/Authorization/SignInRestaurant.jsx'
import Restaurant from './components/Customer/Restaurant.jsx'

function App() {
  const [visitorType, setVisitorType] = useState(getVisitorType())
  const [user, setUser] = useState(getUser())
  const [restaurants, setRestaurants] = useState([])
  const [restaurantToView, setRestaurantToView] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const allRestaurants = await showRestaurants()
      setRestaurants(allRestaurants)
      const random = Math.floor(Math.random(allRestaurants.length))
      setRestaurantToView(allRestaurants[random])
    }
    fetchData()
  }, [])


  // helper functions start here
  const searchRestaurants = (query) => {
    if (query) {
      const filteredRestaurants = restaurantData.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()))
      setRestaurants(filteredRestaurants)
    } else {
      setRestaurants(restaurantData)
    }
  }

  const handleSignOut = () => {
    signout()
    setVisitorType(getVisitorType())
    setUser(getUser())
    navigate('/')
  }

  const handleUserAndVisitorType = ({ user, visitorType }) => {
    setUser(user)
    setVisitorType(visitorType)
  }

  const getRestaurantDetailsToView = async (restaurant) => {
    setRestaurantToView(restaurant)
    let restaurantWithDetails
    if (user) {
      restaurantWithDetails = await getRestaurantPage({ userId: user._id, restaurantId: restaurantToView._id })
    } else {
      restaurantWithDetails = await showARestaurant({ restaurantId: restaurantToView._id })
    }
    setRestaurantToView(restaurantWithDetails)
  }

  // helper functions collected here in methods object
  const methods = {
    searchRestaurants,
    handleSignOut,
    setRestaurantToView,
    getRestaurantDetailsToView,
    setUser,
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
          methods={methods}
        />} />
        <Route path='/customers/signup' element={<SignUpCustomer handleUserAndVisitorType={handleUserAndVisitorType} />} />
        <Route path='/customers/signin' element={<SignInCustomer handleUserAndVisitorType={handleUserAndVisitorType} />} />
        <Route path='/restaurants/signup' element={<SignUpRestaurant handleUserAndVisitorType={handleUserAndVisitorType} />} />
        <Route path='/restaurants/signin' element={<SignInRestaurant handleUserAndVisitorType={handleUserAndVisitorType} />} />
        <Route path='/customers/dashboard' element={
          <CustomerDashboard
            restaurants={restaurants}
            user={user}
            methods={methods} />}
        />
        <Route path='/customers/restaurants/:restaurantName' element={<Restaurant restaurant={restaurantToView} user={user} methods={methods}/>} />
        <Route path='/restaurants/dashboard' element={<RestaurantDashboard
          restaurant={user}
        />} />
      </Routes>
    </>
  )
}


export default App
