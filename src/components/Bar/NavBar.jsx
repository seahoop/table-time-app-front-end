import SignUpAndInButtons from "../Button/SignUpAndInButtons"
import CustomerDashboardButton from "../Button/CustomerDashboardButton"
import EditRestaurantButton from "../Button/EditRestaurantButton"
import { useLocation } from "react-router-dom"
import SignOutButton from "../Button/SignOutButton"

function NavBar({ methods }) {
    const location = useLocation()

    return (
        <nav>
            {location.pathname === '/' && <> <SignUpAndInButtons /> </>}
            {location.pathname === '/customers/dashboard' && <> <SignOutButton methods={methods} /> </>}
            {/* {location.pathname === '/customers/restaurant/:restaurantname' && <> <SignOutButton /> <CustomerDashboardButton /> </>} */}
            {location.pathname === '/restaurants/dashboard' && <> <SignOutButton /> <EditRestaurantButton /> </>}
        </nav>
    )
}

export default NavBar