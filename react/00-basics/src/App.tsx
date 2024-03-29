import Button from "./components/Button";

function App() {
  // let items = ["New York", "Miami", "Chicago", "Los Angeles", "Houston"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <Button onButtonClick={handleButtonClick}>Button Text</Button>

      {/* <Alert>
        <h1>Alert</h1>
      </Alert> */}

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </>
  );
}

export default App;
