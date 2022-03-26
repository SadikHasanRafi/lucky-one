import React from 'react';
import "./App.css"
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Answer from './component/Answer/Answer';


const App = () => {
    return (
        <div>
            <Header></Header>
            <Shop></Shop>
            <Answer></Answer>
        </div>
    );
};

export default App;