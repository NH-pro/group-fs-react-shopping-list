

function DeleteAllGrocItems ({deleteAllGrocItem}){
    console.log('deleteAllGrocItem',deleteAllGrocItem);
    const deleteAllItems = () => {
        console.log('working');
        deleteAllGrocItem();
    }
    return(
    <button onClick={deleteAllItems}>
        reset
    </button>
    );
}

export default DeleteAllGrocItems;