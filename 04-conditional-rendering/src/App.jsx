import UserGreeting from "./UserGreeting"

function App() {

  return (
    <>
    <UserGreeting username="BroCode" isLoggedIn={true} />
    <UserGreeting isLoggedIn={true} />
    <UserGreeting username="BroCode" isLoggedIn={false} />
    </>
  )
}

export default App
