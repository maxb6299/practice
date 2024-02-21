import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <UserGreeting username='JonhDoe' isLoggedIn={true}/>
      <div>OR</div>
      <UserGreeting username='JaneDoe' isLoggedIn={false}/>
    </>
  )
}

export default App