import { useState} from "react"

function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (event) => {
    event.preventDefault()
   /*-------Make a fetch API call---------*/
  }
  return (
    <div>
      <h2>SignIn</h2>
      <form onSubmit={handleSignIn}>
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
        <button type="submit">Sign In</button>
      </form>
      
      
      </div>
  )
}

export default SignIn