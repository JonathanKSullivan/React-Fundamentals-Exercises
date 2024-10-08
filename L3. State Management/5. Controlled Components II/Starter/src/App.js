import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import PageHeader from "./components/PageHeader";
import ShoppingForm from "./components/ShoppingForm";
import ItemList from "./components/ItemList";


const App = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    setItems([...items, value]);
    setValue("");
  };

  const deleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const inputIsEmpty = () => value === "";

  const noItemsFound = () => items.length === 0;

  return (
    <div className="App">
      <PageHeader logo={logo} />
      <h2>Shopping List</h2>
      <ShoppingForm value={value} handleChange={handleChange} inputIsEmpty={inputIsEmpty} addItem={addItem} deleteLastItem={deleteLastItem} noItemsFound={noItemsFound} />
      <ItemList items={items}>  </ItemList>
    </div>
  );
};

export default App;
