import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../../../actions/taskActions';

class AddTask extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            task: "",
            checked: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state)
        document.getElementById("addTaskForm").reset()
    }

    render() {
        return (
            <>
                <form className="container"
                    id="addTaskForm"
                    autoComplete="off"
                    style={{ marginTop: "30px" }}
                    onSubmit={this.handleSubmit}>
                    <legend>{""}</legend>
                    <div className="form-group">
                        <label htmlFor="addTask">Add Task</label>
                        <input type="text" className="form-control"
                            id="task"
                            onChange={this.handleChange}
                            placeholder="Add what you need to complete" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask)