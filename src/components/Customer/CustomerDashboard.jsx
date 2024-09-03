import { useState, useEffect } from "react"
import RestaurantList from "./RestaurantList.jsx"
import ReservationList from './ReservationList.jsx'
import SearchBar from "./SearchBar.jsx"
import { editReservation, cancelReservation } from "../../services/customer.js"
import { useNavigate } from "react-router-dom"

function CustomerDashboard({ restaurants, user, methods }) {

  const navigate = useNavigate()

  const editCustomerReservation = async (reservationId, formdata) => {
    if (user) {
      const customerWithReservationEdits = await editReservation(user._id, reservationId, formdata)
      console.log(customerWithReservationEdits)
      methods.setUser(customerWithReservationEdits)
    }
    navigate('/customers/dashboard')
  }

  const cancelCustomerReservation = async (reservationId) => {
    if (user) {
      const customerWithCanceledReservation = await cancelReservation(user._id, reservationId)
      console.log(customerWithCanceledReservation)
      methods.setUser(customerWithCanceledReservation)
    }
    navigate('/customers/dashboard')
  }

  const customerMethods = {
    ...methods,
    editCustomerReservation,
    cancelCustomerReservation,
  }

  return (
    <>
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <main>
            <section>
              <SearchBar searchRestaurants={methods.searchRestaurants} />
              <RestaurantList restaurants={restaurants} methods={methods} />
            </section>
            <aside>
              {user.myReservations ?
                <>
                  <h1>My Reservations</h1>
                  <ReservationList reservations={user.myReservations} customerMethods={customerMethods} />
                </> :
                <>
                  <h2>Make your first reservation!</h2>
                </>
              }
            </aside>
          </main>
        </>
      ) : (
        <p>Loading Customer Dashboard...</p>
      )}
    </>
  )
}

export default CustomerDashboard
