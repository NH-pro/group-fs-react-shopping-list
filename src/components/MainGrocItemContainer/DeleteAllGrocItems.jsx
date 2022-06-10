

function DeleteAllGrocItems ({deleteAllGrocItem}){
    console.log('deleteAllGrocItem',deleteAllGrocItem);
    const deleteAllItems = () => {
        console.log('working');
        deleteAllGrocItem();
    }
    return(
    <button onClick={deleteAllItems}>
        Clear
    </button>
    );
}

export default DeleteAllGrocItems;