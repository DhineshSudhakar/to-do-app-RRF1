import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOut } from '../../actions/authActions'

function NavbarItems({ userId, signOut }) {
    if (userId) {
        return (
            <Link to="/signin" className="nav-link" onClick={signOut}>
                Logout
            </Link>
        )
    } else {
        return (
            <>
                <Link to="/signUp" className="nav-link">
                    Sign Up
                </Link>
                <Link to="/signIn" className="nav-link">
                    Sign In
                </Link>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        userId: state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarItems)