function SignOutButton({ methods }) {
    const handleClick = () => {
        methods.handleSignOut()
    }
    return (
        <button className='auth-button' onClick={handleClick}>Sign Out</button>
    )
}

export default SignOutButton