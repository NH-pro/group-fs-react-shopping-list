// Function that handles the all components within the
// main shopping list section of the DOMtem
import ShowSingleItem from './OneGrocItem'
function GrocItemMainComponent({grocItemsList,deleteOneGrocItem, purchaseGrocItem}) {
    console.log('List item',grocItemsList,deleteOneGrocItem);
    // const removeBtn= () => {
    //     console.log('Remove');
    // }
    // const buyBtn= () => {
    //     console.log('Buy');
    // }
    return (
        <>
             <main>
                <h1>We sell quality Groc Items!</h1>
                <h6>We also sell motor oil --not related to the above...</h6>
                <br />
                <p>This is our main component</p>
                <div className="conatiner">
                    <ul>
                            {grocItemsList.map(grocItemObj => (
                                <ShowSingleItem
                                    deleteOneGrocItem={deleteOneGrocItem}
                                    key={grocItemObj.id}
                                    grocItemObj={grocItemObj}
                                    purchaseGrocItem = {purchaseGrocItem}
                                />
                            ))}
                    </ul>

                    {/* <button onClick={buyBtn}> 
                        Buy
                    </button>
                    <button onClick={removeBtn}>
                        Remove
                    </button> */}

                </div>
            </main>
        </>
    );
 
}

export default GrocItemMainComponent