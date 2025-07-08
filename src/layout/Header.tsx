import { Link } from "react-router";
import "../style/style.css"


export default function Header() {

    return (
        <header>
            <Link to="/" className="header-title">
                <h1>Paraz10's website</h1>
            </Link>
        </header>
    );
}