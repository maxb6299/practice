import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Miami", "Chicago", "Los Angeles", "Houston"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getEmptyListMessage = () => {
    return items.length == 0 ? <div>List is empty</div> : null;
  };

  return (
    <>
      <h1>List of Cities</h1>

      <div>{getEmptyListMessage()}</div>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
