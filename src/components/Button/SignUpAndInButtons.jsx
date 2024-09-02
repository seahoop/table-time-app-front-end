import { useNavigate } from "react-router-dom"

function SignUpAndInButtons() {
    const navigate = useNavigate()

    const handleNewCustomerClick = () => {
        navigate('/customers/signup')
    }

    const handleNewRestaurantClick = () => {
        navigate('/restaurants/signup')
    }

    const handleCustomerSignInClick = () => {
        navigate('/customers/signin')
    }

    const handleRestaurantSignInClick = () => {
        navigate('/restaurants/signin')
    }

    return (
        <>
            <button className='auth-button' onClick={handleCustomerSignInClick}>Customer Sign In</button>
            <button className='auth-button' onClick={handleRestaurantSignInClick}>Restaurant Sign In</button>
            <button className='auth-button' onClick={handleNewCustomerClick}>Customer Sign Up</button>
            <button className='auth-button' onClick={handleNewRestaurantClick}>Restaurant Sign Up</button>
        </>
    )
}

export default SignUpAndInButtons