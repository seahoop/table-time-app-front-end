import { useState} from "react"

function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault()
  if (password !== confirmPassword) {
    alert('Passwords do not match')
    /*-----Tell the browser not to accept the password-----*/ 
  }
  }
  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" name="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password"
          type="text" 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input id="confirmPassword" name="confirmPassword"
          type="text" 
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          />
        </div>
        
        <button type="submit">Sign Up</button>
      </form>
      
      
      </div>
  )
}

export default SignUp