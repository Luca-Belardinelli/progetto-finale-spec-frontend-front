import { Link } from "react-router-dom"
import { FaHeart, FaBalanceScale } from "react-icons/fa";
import "./Header.css";

export default function Header() {

    return (
        <>
            <header className="header">
                <div className="header__container">

                    <Link to={"/"}>
                        <img
                            src="eggrocket-logo-white.png"
                            alt="Eggrocket Logo"
                            style={{ height: "45px" }}
                        />
                    </Link>

                    <div className="header__actions">
                        <Link to={"/favorites"}>
                            <button className="icon-button" aria-label="Preferiti">
                                <FaHeart className="header-icon" />
                            </button>
                        </Link>

                        <Link to={"/compare"}>
                            <button className="icon-button" aria-label="Pagina di comparazione">
                                <FaBalanceScale className="header-icon" />
                            </button>
                        </Link>

                    </div>
                </div>
            </header >

        </>
    );
}
