import React from "react";
import './app.css';
import TodoForm from "./form";
import Home from "./home";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <Router>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="form"> Form </Link>
                </nav>

                <Routes>
                    <Route exact path="/" element={<Home />} />

                    <Route path="form" element={<TodoForm />} />
                </Routes>
            </Router>
        )
    }
}

export default App;