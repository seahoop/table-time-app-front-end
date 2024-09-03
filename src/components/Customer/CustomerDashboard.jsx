import { useState, useEffect } from "react"
import RestaurantList from "./RestaurantList.jsx"
import ReservationList from './ReservationList.jsx'
import SearchBar from "./SearchBar.jsx"
import { editReservation } from "../../services/customer.js"

function CustomerDashboard({ restaurants, user, methods }) {
  const [customer, setCustomer] = useState(user)

  useEffect(() => {
  }, [customer])

  const editCustomerReservation = async (reservationId, formdata) => {
    const customerWithReservationEdits = await editReservation(customer._id, reservationId, formdata)
    methods.setUser(customerWithReservationEdits)
  }

  const cancelCustomerReservation = async (reservationId) => {

  }

  const customerMethods = {
    ...methods,
    editCustomerReservation,
    cancelCustomerReservation,
    setCustomer
  }

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
              <ReservationList reservations={customer.myReservations} customerMethods={customerMethods} />
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
