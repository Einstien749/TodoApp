import React from "react";
import './home.css';
import { connect } from 'react-redux';
import AddTodo from "./red/action";
import DeleteTodo from "./red/delete";
import {useState, useEffect} from 'react';
import { FaTrash, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

function Home(props){

    const [data, setData] = useState([]);

    useEffect(() => {
        const f = props.todos.mytodo;
        setData(f);
    }, [props.todos.mytodo]);

    const lit = data.map((it) => <tr key={data.indexOf(it)} className="item"><td>{it.task}</td><td>{it.time}</td><td>{it.date}</td><td style={{textAlign: 'center'}}><FaTrash style={{color: "rgb(255,0,0)"}} onClick={() => {props.delete(data.indexOf(it));setData(props.todos.mytodo);}}></FaTrash></td></tr>);
    return (
        <div className="dat">
            <table border="1">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {lit}
                </tbody>
            </table>
            <div id="contact">
                <a href="https://www.facebook.com/odimayo.taiye.7" ><FaFacebook></FaFacebook></a>
                <a href="https://github.com/Einstien749"><FaGithub></FaGithub></a>
                <a href="https://www.linkedin.com/in/odimayo-moses-taiye-435825234"><FaLinkedin></FaLinkedin></a>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (pop) => {dispatch(AddTodo(pop));},

        delete: (pop) => {dispatch(DeleteTodo(pop));}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);