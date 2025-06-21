import './NavBar.css';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navpages">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
            </NavLink>
            <NavLink to="/compare" className={({ isActive }) => (isActive ? "active" : "")}>
                Confronta le console
            </NavLink>
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? "active" : "")}>
                Lista  preferiti
            </NavLink>
        </nav>
    );
}