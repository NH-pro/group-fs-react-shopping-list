// Core imports
import React from 'react';
import axios from 'axios';

// Import App Stylesheet
import './App.css';


// Import the modules from here
import Header from '../GrocItemHeader/GrocItemHeader'
import GrocItemForm from '../GrocItemForm/GrocItemForm'
import GrocItemMainComponent from '../MainGrocItemContainer/GrocItemMainComponent.jsx';


// The main App container for our React app.
// Contains ALL the components that comprise our core React app within it.
function App() {

    // ----------------------------------------
    // ROUTE SECTION - Communicates with server
    // ----------------------------------------

    // Function for to POST a new grocery item
    const postGrocItem = (grocItemObj) => {
        console.log("In the POST route with", grocItemObj)

        axios.post("/", grocItemObj)
        .then(() => console.log("Successful POST of new grocery item"))
        .catch(err => {
            console.log(`
                Error in POST route in App.jsx:
            
                ${err}
            `)
        })
    }


    return (
        <div className="App">
            <Header />

            <GrocItemForm />
           
            <GrocItemMainComponent />

        </div>
    );
}

export default App;
