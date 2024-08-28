import RestaurantDashboard from "../Restaurant/RestaurantDashboard"
import CustomerDashboard from "../Customer/CustomerDashboard"
import LandingPage from "./LandingPage"

// Home component separates by user: guest, customer, or restaurant
// Customer and Restaurant have their own components while all guests go to LandingPage component
function Home({ user, restaurants, methods }) {
    return (
        <>
        {user ? 
        user.name ? <RestaurantDashboard restaurant={user}/> : <CustomerDashboard restaurants={restaurants} reservations={reservations} searchRestaurants={methods.searchRestaurants}/>
        :
        <LandingPage restaurants={restaurants} />
        }
        </>
    )
}

export default Home