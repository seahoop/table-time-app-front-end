import RestaurantList from "../Customer/RestaurantList"
import SearchBar from "../Customer/SearchBar"

function LandingPage({ restaurants, searchRestaurants }) {
    return (
        <>
            <h1>Welcome to Table Time!</h1>
            <SearchBar searchRestaurants={searchRestaurants} />
            <RestaurantList restaurants={restaurants}/>
        </>
    )
}

export default LandingPage