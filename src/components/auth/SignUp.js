import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../actions/authActions';

class SignUp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        if (this.props.userId) return <Redirect to="/" />
        return (
            <>
                <form className="container"
                    autoComplete="off"
                    style={{ marginTop: "30px" }}
                    onSubmit={this.handleSubmit}>
                    <legend>{""} <h4>Sign Up</h4></legend>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control"
                            id="password"
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        userId: state.firebase.auth.uid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)