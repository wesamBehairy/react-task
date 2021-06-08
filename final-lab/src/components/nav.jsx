import { NavLink as Link } from 'react-router-dom'

import '../App.css';

const Nav = () => {

    const mystyle = {
        backgroundColor: "thistle",
      };

    return (
            <nav className="navbar navbar-expand-lg navbar-light" style={mystyle}>
                <Link className="navbar-brand" to="#">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"> About </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register"> Register </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Nav