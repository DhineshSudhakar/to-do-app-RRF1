import { toast } from 'react-toastify'

const taskReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            toast.success("added a task");
            return state
        }
        case "ADD_TASK_ERR": {
            toast.error("An error occurred");
            return state
        }
        case "REMOVE_TASK": {
            toast.warn("A task was removed")
            return state
        }
        case "REMOVE_TASK_ERR": {
            toast.error("An error occurred while removing the error")
            return state
        }
        case "TOGGLE_CHECKED": {
            toast.info("A task status has changed")
            return state
        }
        case "TOGGLE_CHECKED_ERR": {
            toast.error("An error occurred while changing the status of task")
            return state
        }
        default:
            return state
    }
}

export default taskReducer