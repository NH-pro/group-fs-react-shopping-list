import React from 'react';

import Header from '../GrocItemHeader/GrocItemHeader'
import './App.css';
import GrocItemForm from '../GrocItemForm/GrocItemForm'

// Import the modules from here
import GrocItemMainComponent from '../MainGrocItemContainer/GrocItemMainComponent.jsx';


function App() {
    return (
        <div className="App">
            <Header />

            <GrocItemForm />
           
            <GrocItemMainComponent />

        </div>
    );
}

export default App;
