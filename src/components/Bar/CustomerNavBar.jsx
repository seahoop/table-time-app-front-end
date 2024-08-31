import SignOutButton from '../Button/SignOutButton'
import CustomerDashboardButton from '../Button/CustomerDashboardButton'

export function CustomerDashboardNavBar() {
    return (
        <SignOutButton />
    )
}

export function RestaurantPageNavBar() {
    return (
        <>
            <SignOutButton />
            <CustomerDashboardButton />
        </>
    )
}