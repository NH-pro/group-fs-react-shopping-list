

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
        <ul>
            <li>
                {grocItemObj.name}
            </li>
            <li>
                {grocItemObj.quantity} {grocItemObj.unit}
            </li>
        </ul>


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