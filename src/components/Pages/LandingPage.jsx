import RestaurantList from "../Customer/RestaurantList"
import SearchBar from "../Customer/SearchBar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import './LandingPage.css'

function LandingPage({ visitorType, restaurants, methods }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (visitorType === 'customer') { navigate('/customers/dashboard') }
        if (visitorType === 'restaurant') { navigate('/restaurants/dashboard') }
    }, [])

    return (
        <main className="landing-page">
            <h1>Welcome to Table Time!</h1>
            <SearchBar searchRestaurants={methods.searchRestaurants} />
            <RestaurantList restaurants={restaurants} methods={methods} />
        </main>
    )
}

export default LandingPage