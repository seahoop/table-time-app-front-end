import RestaurantList from "./RestaurantList.jsx"
import ReservationList from './ReservationList.jsx'
import SearchBar from "./SearchBar.jsx"

function CustomerDashboard(props) {
  const { restaurants, reservations, searchRestaurants } = props
  return (
    <>
      <h2>Welcome user!</h2>
      <main>
        <section>
          <SearchBar searchRestaurants={searchRestaurants} />
          <RestaurantList restaurants={restaurants} />
        </section>
        <aside>
          <h1>My Reservations</h1>
          <ReservationList reservations={reservations} />
        </aside>
      </main>
    </>
  )
}

export default CustomerDashboard
