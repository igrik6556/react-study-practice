import React, {useContext} from "react";
import {useNavigate, useLocation} from "react-router-dom";

import {AuthContext} from "../../hoc/AuthContext";
import {Container} from '../../../Layout'

const LoginPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const { signin } = useContext(AuthContext)
    const from = location.state?.from?.pathname || "/"

    const submitHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const username = form.username.value
        signin(username, () => navigate(from, {replace: true}))
    }

    return (
        <Container>
            <h1>Login page</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control w-50" name="username" id="username" />
                </div>
                <button type="submit" className="btn btn-primary py-2 px-5">Login</button>
            </form>
        </Container>
    )
}

export default LoginPage