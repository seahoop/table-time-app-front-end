import RestaurantList from "../Customer/RestaurantList"
import SearchBar from "../Customer/SearchBar"
import { useNavigate } from "react-router-dom"

function LandingPage({ visitorType, restaurants, methods }) {
    const navigate = useNavigate()

    return (
        visitorType === 'guest' ? 
        <>
            <h1>Welcome to Table Time!</h1>
            <SearchBar searchRestaurants={methods.searchRestaurants} />
            <RestaurantList restaurants={restaurants} methods={methods}/>
        </> :
        visitorType === 'customer' ?
        navigate('/customers/dashboard') :
        navigate('/restaurants/dashboard')
    )
}

export default LandingPage