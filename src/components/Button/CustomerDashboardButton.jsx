import { useNavigate } from "react-router-dom"

function CustomerDashboardButton() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/customers/dashboard')
    }
  return (
    <button className='auth-button' onClick={handleClick}>Go to Dashboard</button>
  )
}

export default CustomerDashboardButton