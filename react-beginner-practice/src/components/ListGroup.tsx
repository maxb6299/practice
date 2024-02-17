import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getEmptyListMessage = () => {
    return items.length == 0 ? <div>List is empty</div> : null;
  };

  return (
    <>
      <h1>{heading}</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <div>{getEmptyListMessage()}</div>
    </>
  );
}

export default ListGroup;
