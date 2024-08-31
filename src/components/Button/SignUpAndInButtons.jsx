import { useNavigate } from "react-router-dom"

function SignUpAndInButtons() {
    const navigate = useNavigate()

    const handleNewCustomerClick = () => {
        navigate('/customers/signup')
    }

    const handleNewRestaurantClick = () => {
        navigate('/restaurants/signup')
    }

    const handleSignInClick = () => {
        navigate('/signin')
    }

    return (
        <>
            <button className='auth-button' onClick={handleSignInClick}>Sign In</button>
            <button className='auth-button' onClick={handleNewCustomerClick}>Customer Sign Up</button>
            <button className='auth-button' onClick={handleNewRestaurantClick}>Restaurant Sign Up</button>
        </>
    )
}

export default SignUpAndInButtons