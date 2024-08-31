
const ShoppingForm = ({value, handleChange, inputIsEmpty, addItem, deleteLastItem, noItemsFound}) => {
    return (<><form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
      
      <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>
      </>)
      
}

export default ShoppingForm;