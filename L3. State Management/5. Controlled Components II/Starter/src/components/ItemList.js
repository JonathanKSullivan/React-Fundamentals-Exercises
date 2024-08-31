const ItemList = ({items}) => {
    return (
        <>
        <p className="items">Items</p>
            <ol className="item-list">
                {items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ol>
        </>
    )
};
export default ItemList;