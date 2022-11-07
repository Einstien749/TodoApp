import React from "react";
import './form.css';
import { connect } from 'react-redux';
import AddTodo from "./red/action";

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {err: 'No Field Must be Left Empty', show: 'none', submit: false, success: 'Task Successfully Added', succ: 'none'}
        this.taskRef = React.createRef();
        this.timeRef = React.createRef();
        this.dateRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        if((this.taskRef.current.value === "")  || (this.timeRef.current.value === "") || (this.dateRef.current.value === "")){
            this.setState({show: 'block'});
            setTimeout(() => {
                this.setState({show: 'none'});
            }, 2000);
        }
        else{
            let val = {
                task: this.taskRef.current.value,
                time: this.timeRef.current.value,
                date: this.dateRef.current.value
            }

            this.props.add(val);
            this.setState({succ: 'block'});

            setTimeout(() => {
                this.setState({succ: 'none'});
                this.taskRef.current.value = "";
                this.timeRef.current.value = "";
                this.dateRef.current.value = "";
            }, 1000);
        }
    }

    render(){
        return (
            <div className="form">
                <h2>
                    ADD A TODO
                </h2>
                <div style={{display: this.state.show, color: 'rgb(200,0,0)', textAlign: 'center'}}>
                    {this.state.err}
                </div>
                <div style={{display: this.state.succ, color: 'rgb(0,200,0)', textAlign: 'center'}}>
                    {this.state.success}
                </div>
                <form>
                    <div><label htmlFor="task">Task</label><input ref={this.taskRef} type="text" id='task' placeholder='Task' autoFocus /></div>

                    <div><label htmlFor="time">Time</label><input ref={this.timeRef} type="time" id='time' /></div>

                    <div><label htmlFor="date">Date</label><input ref={this.dateRef} type="date" id='date' /></div>
                </form>
                <div style={{textAlign: 'center'}}>
                    <input type='button' value="Submit" style={{width: '40%'}} onClick={this.handleSubmit} />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);