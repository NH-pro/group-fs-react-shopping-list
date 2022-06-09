import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';

// Import the modules from here
import MainComponent from '../MainGrocItemContainer/GrocItemMainComponent.jsx';


function App() {
    return (
        <div className="App">
            <Header />
            <MainComponent />
        </div>
    );
}

export default App;
