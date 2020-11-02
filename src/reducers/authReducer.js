import { toast } from 'react-toastify'

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGN_IN":
            toast("Welcome back");
            return state
        case "SIGN_IN_ERR":
            toast.error("Sign in error...")
            return state
        case "SIGN_OUT":
            toast.info("User signed out")
            return state
        case "SIGN_OUT_ERR":
            toast.error("Error in signing out")
            return state
        case "SIGN_UP":
            toast.success("User signed up")
            return state
        case "SIGN_UP_ERR":
            toast.error("Error in signing up")
            return state
        default:
            return state
    }
}

export default authReducer