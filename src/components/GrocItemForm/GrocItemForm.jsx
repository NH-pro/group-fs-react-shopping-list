function Form() {
    console.log(`In Form.jsx component!`);

    return (
        <div>
            <h2>Add an Item</h2>
            <form>
                <input type="text" placeholder="Item name"/>
                <input type="number"/>
                <input type="text"/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
export default Form;