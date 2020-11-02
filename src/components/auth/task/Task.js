import React from 'react'
import moment from 'moment'
import { removeTask, toggleChecked } from '../../../actions/taskActions'
import { connect } from 'react-redux'
import Check from './Check'

function Task({ task, removeTask, toggleChecked }) {

    const hanedleRemove = (task) => {
        removeTask(task)
    }

    const handleCheck = (task) => {
        toggleChecked(task)
    }

    return (
        <>
            <tr>
                <th scope="row">{task.task}</th>
                <td>{moment(task.date.toDate()).calendar()}</td>
                <td><Check onClick={() => handleCheck(task)} check={task.Checked} /></td>
                <td><span
                    className="material-icons text-danger"
                    onClick={() => hanedleRemove(task)}
                    style={{ cursor: "pointer" }}  >
                    delete</span></td>
            </tr>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: (task) => dispatch(removeTask(task)),
        toggleChecked: (task) => dispatch(toggleChecked(task))
    }
}



export default connect(null, mapDispatchToProps)(Task)
