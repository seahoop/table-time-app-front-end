import { useState } from "react"
import { restaurantSignUp, getVisitorType } from "../../services/auth"
import { useNavigate } from "react-router-dom"

function SignUpRestaurant({ handleUserAndVisitorType }) {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSignUp = async (event) => {
    event.preventDefault()
    if (event.target.password.value !== event.target.confirmPassword.value) {
      alert('Passwords do not match')
      return
    }
    const user = await restaurantSignUp(formData)
    const visitorType = getVisitorType()
    handleUserAndVisitorType({user, visitorType})
    navigate('/')
  }

  return (
    <div>
      <h2>Sign Up as a Restaurant!</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required />
        </div>
        <div>
          <label htmlFor="name">Restaurant Name:</label>
          <input id="name" name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password"
            type="text"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input id="confirmPassword" name="confirmPassword"
            type="text"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>


    </div>
  )
}

export default SignUpRestaurant