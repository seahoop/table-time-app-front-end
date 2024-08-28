
function CustomerDashboard(props) {

  return (
    <>
    <h2>Welcome user!</h2>
    <main>
      <section>
        <RestaurantList restaurants={restaurants} />
      </section>
      <aside>
      </aside>
    </main>
    </>
  )
}

export default CustomerDashboard