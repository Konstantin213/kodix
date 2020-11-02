import React from "react";
import './App.css';
import StartPage from "./components/StartPage/StartPage";
import {Route} from "react-router-dom";


const App = () => {
    return (
        <div>
            <Route path="/" component={StartPage}/>
        </div>
    );
}
export default App;