import { useState } from "react"
import RestaurantList from "./RestaurantList.jsx"
import ReservationList from './ReservationList.jsx'
import SearchBar from "./SearchBar.jsx"

function CustomerDashboard(props) {
  const { restaurants, user, searchRestaurants } = props
  const [customer, setCustomer] = useState(user)

  const editReservation = async ({ customerWithEditedReservation }) => {
    setCustomer(customerWithEditedReservation)
  }

  const deleteReservation = async ({customerWithDeletedReservation}) => {
    setCustomer(customerWithDeletedReservation)
  }

  const helpers = {
    editReservation,
    deleteReservation
  }

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
          <ReservationList reservations={customer.myReservations} helpers={helpers}/>
        </aside>
      </main>
    </>
  )
}

export default CustomerDashboard
