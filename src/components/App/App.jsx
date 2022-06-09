// Core imports
import React, { useState, useEffect } from 'react';
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

    // useEffect to execute 'getGrocItems' when App loads.
    useEffect(() => {
        getGrocItems();
    },[]);

    // useState controls the grocItemList array.
    const [grocItemList, setGrocItemsList] = useState([]);

    // ----------------------------------------
    // ROUTE SECTION - Communicates with server
    // ----------------------------------------
  
    const getGrocItems = () => {
        axios({
            method: 'GET',
            url: '/grocery-items'
        })
        .then((response) => {
            console.log(`GET /grocery-items SUCCESS! response is:`, response.data);
            setGrocItemsList(response.data);
        })
        .catch((err) => {
            console.log(`GET /grocery-items request FAILED`, err);
        })
    }   


    // Function for to POST a new grocery item
    const postGrocItem = (grocItemObj) => {
        console.log("In the POST route with", grocItemObj)

        axios.post("/", grocItemObj)
        .then(() => {
            console.log("Successful POST of new grocery item")
            getGrocItems();
        })
        .catch(err => {
            console.log(`
                Error in POST route in App.jsx:
            
                ${err}
            `)
        })
    }

    const deleteOneGrocItem = (grocItemId) => {
        axios({
            method: 'DELETE',
            url: `/${grocItemId}`
        })
        .then((response) => {
            console.log('The delete response', response);
            getGrocItems();
        })
        .catch((err) => {
            console.log('Uh oh there is a err', err);
        });
    }

    const deleteAllGrocItem = () => {
        axios({
            method: 'DELETE',
            url: '/allGrocItems'
        })
        .then((response) => {
            console.log('The delete response', response);
            getGrocItems();
        })
        .catch((err) => {
            console.log('Uh oh there is a err', err);
        });
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

