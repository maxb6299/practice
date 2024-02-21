import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <UserGreeting username='JonhDoe' isLoggedIn={true}/>
      <UserGreeting username='JaneDoe' isLoggedIn={false}/>
    </>
  )
}

export default App