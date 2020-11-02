import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AddTask from '../auth/task/AddTask'
import Tasks from '../auth/task/Tasks'

function Dashboard({ userId }) {
    if (!userId) return <Redirect to="/signin" />
    return (
        <div>
            <AddTask />
            <Tasks />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid
    }
}


export default connect(mapStateToProps)(Dashboard)
