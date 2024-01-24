import HelloWorld from "./components/HelloWorld";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Miami", "Chicago", "Los Angeles", "Houston"];

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  );
}

export default App;
