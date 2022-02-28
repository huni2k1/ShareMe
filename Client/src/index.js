import React from "react"
import ReactDOM from "react-dom"
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));
    console.log(process.env.REACT_APP_SANITY_PROJECT_ID)