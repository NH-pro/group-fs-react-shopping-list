// Function that handles the all components within the
// main shopping list section of the DOM
function GrocItemMainComponent({grocItemsList}) {
    console.log('List item',grocItemsList);
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
                                <li key={grocItemObj.id}>
                                {grocItemObj.name}
                                </li>
                            ))}
                        
                    </ul>

                    <button id="buyBtn">Buy</button>
                    <button id="removeBtn">Remove</button>

                </div>
            </main>
        </>
    );
}

export default GrocItemMainComponent