import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <UserGreeting username='JonhDoe' isLoggedIn={true}/>
      <div>OR</div>
      <UserGreeting username='JaneDoe' isLoggedIn={false}/>
      <div>OR</div>
      <UserGreeting isLoggedIn={true}/>
    </>
  )
}

export default App