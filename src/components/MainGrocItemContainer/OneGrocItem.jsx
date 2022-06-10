

function ShowSingleItem({ grocItemObj, deleteOneGrocItem, purchaseGrocItem}) {

    const removeBtn= () => {
        console.log('Remove','the id is',grocItemObj.id);
        deleteOneGrocItem(grocItemObj.id);
    }
    const buyBtn= () => {
        console.log('Buy');
        purchaseGrocItem(grocItemObj.id)
    }
    return (
        <>
        
            <li>
                {grocItemObj.name}
            </li>
            <li>
                {grocItemObj.quantity} {grocItemObj.unit}
            </li>

            <button onClick={buyBtn}>
                Buy
            </button>

            <button onClick={removeBtn}>
                Remove
            </button>
        </>
    )
}

export default ShowSingleItem;