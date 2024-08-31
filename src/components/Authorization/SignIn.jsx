import { useState } from "react"
import { customerSignIn } from "../../services/auth"

function SignIn() {
  const [formData, setFormData] = useState(
    {
      username: '',
      password: ''
    }
  )

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSignIn = async (event) => {
    event.preventDefault()
    await customerSignIn(formData)
      
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

export default SignIn