import

function Home({ user, restaurants, reservations }) {
    return (
        <>
        {user ? {user.name ?  : <></>}: <></> }
        </>
    )
}

export default Home