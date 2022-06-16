import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="container border-bottom py-3">
            <div className="row">
                <div className="offset-lg-3 col-lg-6 d-flex justify-content-between">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header