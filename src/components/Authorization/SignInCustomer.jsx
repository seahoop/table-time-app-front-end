import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { customerSignIn, getVisitorType } from "../../services/auth"

function SignInCustomer({ handleUserAndVisitorType }) {
  const [formData, setFormData] = useState(
    {
      username: '',
      password: ''
    }
  )

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSignIn = async (event) => {
    event.preventDefault()
    const user = await customerSignIn(formData)
    const visitorType = getVisitorType()
    handleUserAndVisitorType({user, visitorType})
    navigate('/')
  }
  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required />
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
        <button type="submit">Sign In</button>
      </form>


    </div>
  )
}

export default SignInCustomer