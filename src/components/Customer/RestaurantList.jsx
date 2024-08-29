import RestaurantCard from "./RestaurantCard"
import ("./RestaurantList.css")

function RestaurantList(props) {
  const { restaurants } = props
  return (
    <div className='grid-container'>
      {restaurants.map((restaurant) => {
        return <RestaurantCard img={restaurant.image} name={restaurant.name} about={restaurant.about} key={restaurant.name}/>
      })}
    </div>
  )
}

export default RestaurantList