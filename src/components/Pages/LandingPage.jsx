import RestaurantList from "../Customer/RestaurantList"
import SearchBar from "../Customer/SearchBar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function LandingPage({ visitorType, restaurants, methods }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (visitorType === 'customer') { navigate('/customers/dashboard') }
        if (visitorType === 'restaurant') { navigate('/restaurants/dashboard') }
    }, [])

    return (
        <>
            <h1>Welcome to Table Time!</h1>
            <SearchBar searchRestaurants={methods.searchRestaurants} />
            <RestaurantList restaurants={restaurants} methods={methods} />
        </>
    )
}

export default LandingPage