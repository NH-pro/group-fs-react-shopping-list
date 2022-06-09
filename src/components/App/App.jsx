import React from 'react';
import axios from 'axios';
import Header from '../GrocItemHeader/GrocItemHeader'
import './App.css';
import GrocItemForm from '../GrocItemForm/GrocItemForm'

// Import the modules from here
import GrocItemMainComponent from '../MainGrocItemContainer/GrocItemMainComponent.jsx';


function App() {

    const getGrocItems = () => {
        axios({
            method: 'GET',
            url: '/grocery-items'
        })
        .then((response) => {
            console.log(`GET /grocery-items SUCCESS! response is:`, response.data);
        })
        .catch((err) => {
            console.log(`GET /grocery-items request FAILED`, err);
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
