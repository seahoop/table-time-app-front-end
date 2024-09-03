import RestaurantCard from "./RestaurantCard"
import { useNavigate } from "react-router-dom"

function RestaurantList(props) {
  const { restaurants, methods } = props
  const navigate = useNavigate()

  const handleClick = async (restaurant) => {
    await methods.getRestaurantDetailsToView(restaurant)
    navigate(`/customers/restaurants/${restaurant.name}`)
  }

  return (
    <div className='restaurants-container'>
      {restaurants.map((restaurant) => {
        return <RestaurantCard 
        onClick={() => handleClick(restaurant)}
        img={restaurant.image} 
        name={restaurant.name} 
        about={restaurant.about} 
        key={restaurant.name}/>
      })}
    </div>
  )
}

export default RestaurantList