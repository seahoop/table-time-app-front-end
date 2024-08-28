import RestaurantCard from "./RestaurantCard"

function RestaurantList(props) {
  const { restaurants } = props
  return (
    <div className='grid-container'>
      {restaurants.map((restaurant) => {
        return <RestaurantCard img={restaurant.img} name={restaurant.name} about={restaurant.about}/>
      })}
    </div>
  )
}

export default RestaurantList