import RestaurantList from "../Customer/RestaurantList"
import SearchBar from "../Customer/SearchBar"
import CustomerDashboard from "../Customer/CustomerDashboard"
import RestaurantDashboard from "../Restaurant/RestaurantDashboard"
import { useNavigate } from "react-router-dom"

function LandingPage({ visitorType, restaurants, searchRestaurants }) {
    const navigate = useNavigate()

    return (
        visitorType === 'guest' ? 
        <>
            <h1>Welcome to Table Time!</h1>
            <SearchBar searchRestaurants={searchRestaurants} />
            <RestaurantList restaurants={restaurants}/>
        </> :
        visitorType === 'customer' ?
        navigate('/customers/dashboard') :
        navigate('/restaurants/dashboard')
    )
}

export default LandingPage