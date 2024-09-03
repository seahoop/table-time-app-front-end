import { useState, useEffect } from 'react'
import './App.css'
import restaurantData from './assets/restaurants.js'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './components/Bar/NavBar.jsx'

// Rodney Testing Imports
import CustomerDashboard from './components/Customer/CustomerDashboard.jsx'
import RestaurantDashboard from './components/Restaurant/RestaurantDashboard.jsx'

// Eric Testing Imports
import LandingAdminPage from './components/admin/landingPage.jsx';
import SignUp from './components/admin/signUp.jsx'
import SignIn from './components/admin/signIn.jsx'
import AdminPanel from './components/admin/adminPanel.jsx'
import RestaurantDatabase from './components/admin/restaurantData.jsx'
import CustomerDatabase from './components/admin/customerData.jsx'
import CustomerUserProfile from './components/admin/customerUserProfile.jsx';
import RestaurantUserProfile from './components/admin/restaurantUserProfile.jsx';


// Ismael Testing Imports
import SignUpCustomer from "./components/Authorization/SignUpCustomer.jsx"
import SignInCustomer from './components/Authorization/SignInCustomer.jsx'
import LandingPage from './components/Pages/LandingPage.jsx'
import { showRestaurants, showARestaurant } from './services/restaurant.js'
import { getRestaurantPage, showCustomer } from './services/customer.js'
import { getUser, getVisitorType, signout } from './services/auth.js'
import SignUpRestaurant from './components/Authorization/SignUpRestaurant.jsx'
import SignInRestaurant from './components/Authorization/SignInRestaurant.jsx'
import Restaurant from './components/Customer/Restaurant.jsx'

function App() {
  const [visitorType, setVisitorType] = useState(getVisitorType())
  const [user, setUser] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [restaurantToView, setRestaurantToView] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const allRestaurants = await showRestaurants()
      setRestaurants(allRestaurants)
      const random = Math.floor(Math.random(allRestaurants.length))
      setRestaurantToView(allRestaurants[random])
    }
    fetchRestaurantData()
  }, [])

  useEffect(() => {
    const fetchUserData = async () => {
      const customer = getUser()
      setUser(customer)
    }
    fetchUserData()
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

  const handleUserAndVisitorType = (user, visitorType) => {
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
    showCustomer
  }

  return (

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
            user={user ? user : null}
            methods={methods} />}
        />
        <Route path='/customers/restaurants/:restaurantName' element={
          <Restaurant restaurant={restaurantToView} user={user ? user : null} methods={methods} />
        } />
        <Route path='/restaurants/dashboard' element={<RestaurantDashboard
          restaurant={user}
        />} />
        <Route path="/admin" exact element={<LandingAdminPage />} />
        <Route path="/admin/signUp" element={<SignUp />} />
        <Route path="/admin/signIn" element={<SignIn />} />
        <Route path="/admin/adminPanel" element={<AdminPanel />} />
        <Route path="/admin/adminPanel/customerDataBase" element={<CustomerDatabase />} />
        <Route path="/admin/adminPanel/restaurantDataBase" element={<RestaurantDatabase />} />
        <Route path="/admin/adminPanel/customerProfile/:username" element={<CustomerUserProfile />} />
        <Route path="/admin/adminPanel/restaurantProfile/:username" element={<RestaurantUserProfile/>}/>
      </Routes>
    </>
    
  )
}

export default App
