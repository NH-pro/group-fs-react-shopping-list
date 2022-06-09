import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';

// Import the modules from here
import GrocItemMainComponent from '../MainGrocItemContainer/GrocItemMainComponent.jsx';


function App() {
    return (
        <div className="App">
            <Header />
            <GrocItemMainComponent />
        </div>
    );
}

export default App;
