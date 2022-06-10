// Import React's `useState` function.
// This function will store the input values that a user
// inputs and allow us to easily send those values
// to the database to be saved.
import { useState } from 'react';


function GrocItemForm({
    // Load in the POST function from App.jsx.
    //
    // NOTE: The name `postGrocItem` must EXACTLY match
    // the name that was pass into the component in our
    // App.jsx side.
    //
    // That is how the hand-shake works.
    postGrocItem,
}) {
    console.log(`In Form.jsx component!`);


    // Set the individual state values for each of the individual `<input>` fields.
    // I like to use `const` to make sure the values can not be manipulated with.
    const [grocName, setGrocName] = useState("")
    const [grocNumber, setGrocNumber] = useState("")
    const [grocUnits, setGrocUnits] = useState("")

    // Define a function that is called when the `<form>` is submitted.
    //
    // Within the funtion, it will take in the `STATE` data that was
    // set from the `<input>` fields, put those variables into an
    // object where the `key` name matches the DataBase names.
    const onSubmitGrocItem = (event) => {

        // Stop the webpage from reloading when we submit a form
        event.preventDefault()

        // Create the object we want to POST using the current STATE values.
        // The `key` values (the names on the left), are the column names
        // in our database table.
        const grocItemToPost = {
            name: grocName,
            quantity: grocNumber,
            unit: grocUnits,
        }

        postGrocItem(grocItemToPost)
    }

    return (
        // Using a `React Fragment` here. This allows me to have several
        // top-level HTML items such as my <h2> and <form> at the same
        // level --otherwise I would need to wrap all of this in a <div>.
        <>
        <h2>Add an Item</h2>
        {/*
        
        The form field contains the `onSubmit` tag.
        When a submit form call is made, go to the function
        that is defined in the {}
        
        */}
        <form onSubmit={onSubmitGrocItem}>
            {/*
            
            Make sure to set the `value` to the associated STATE variable.
            Also, make sure that an `onChange` command so React knows to
                automatically update the STATE variable every time a
                button is pressed.

                Each key-press is considered an `EVENT`, so that means we can
                easily pass each `EVENT` (a.k.a. key-press) to our `onChange`
                function. The EVENT actually contains LOTS of information, so
                we can look at that information and grab what we need form it.

                Similar to jQuery, we now can access the `EVENT`. That means
                we can find whatever is currently in the `<input>` field and
                get that `value` using the phrase `event.target.value`.
            
            */}
            <input
                type="text"
                placeholder="Item name"
                value={grocName}
                onChange={(event => setGrocName(event.target.value))}
            />
            <input
                type="number"
                value={grocNumber}
                onChange={(event => setGrocNumber(event.target.value))}
            />
            <input
                type="text"
                value={grocUnits}
                onChange={(event => setGrocUnits(event.target.value))}
            />
            <button type="submit">Save</button>
        </form>
        </>
    );
}
export default GrocItemForm;