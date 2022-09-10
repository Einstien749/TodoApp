import React from "react";
import './home.css';
import { connect } from 'react-redux';
import AddTodo from "./red/action";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: []};
    }

    componentDidMount(){
        const f = this.props.todos.mytodo;
        console.log(this.props.todos);
        this.setState({data: f});
        console.log(this.state.data);
    }
    render(){

        const lit = this.state.data.map((it) => <div key={this.state.data.indexOf(it)} className="item" style={{marginTop: '3vh', fontStyle: 'italic'}}><div style={{borderBottom: '1px outset rgb(200,200,200)'}}>{it.task}</div><div style={{borderBottom: '1px outset rgb(0,0,255)'}}>{it.time}</div><div style={{borderBottom: '1px outset rgb(200,200,200)'}}>{it.date}</div></div>);
        return (
            <div>
                <div style={{marginTop: '5vh', textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold'}}>
                    TODO LIST
                </div>

                <div className="item">
                    <div style={{textAlign: 'center', color: 'rgb(0,200,200)'}}>
                        TASK
                    </div>
                    <div style={{textAlign: 'center', color: 'rgb(0,200,200)'}}>
                        TIME
                    </div>
                    <div style={{textAlign: 'center', color: 'rgb(0,200,200)'}}>
                        DATE
                    </div>
                </div>
                {lit}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (pop) => {dispatch(AddTodo(pop));}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);