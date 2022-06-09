import React from 'react';
import axios from 'axios';
import Header from '../GrocItemHeader/GrocItemHeader'
import './App.css';
import GrocItemForm from '../GrocItemForm/GrocItemForm'

// Import the modules from here
import GrocItemMainComponent from '../MainGrocItemContainer/GrocItemMainComponent.jsx';


function App() {
    const deleteOneGrocItem = (grocItemId) => {
        axios({
            method: 'DELETE',
            url: `/${grocItemId}`
        })
        .then((response) => {
            console.log('The delete response', response);

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

