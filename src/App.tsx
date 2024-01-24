import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Miami", "Chicago", "Los Angeles", "Houston"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
