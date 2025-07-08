import { Link } from "react-router";
import "../style/style.css"


export default function Footer() {

    return (
        <footer>
            <Link to="https://github.com/Paraz10" className="footer-link">
                <p>Github</p>
            </Link>
        </footer>
    );
}