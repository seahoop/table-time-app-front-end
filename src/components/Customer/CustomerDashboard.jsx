import { useState } from "react"
import RestaurantList from "./RestaurantList.jsx"
import ReservationList from './ReservationList.jsx'
import SearchBar from "./SearchBar.jsx"

function CustomerDashboard(props) {
  const { restaurants, user, methods } = props
  const [customer, setCustomer] = useState(user)

  return (
    <>
      <h2>Welcome, {customer.username}!</h2>
      <main>
        <section>
          <SearchBar searchRestaurants={methods.searchRestaurants} />
          <RestaurantList restaurants={restaurants} methods={methods} />
        </section>
        <aside>
          {user.myReservations ?
            <>
              <h1>My Reservations</h1>
              <ReservationList reservations={customer.myReservations} setCustomer={setCustomer} />
            </> :
            <>
              <h2>Make your first reservation!</h2>
            </>
          }
        </aside>
      </main>
    </>
  )
}

export default CustomerDashboard
