import Link from "next/link";
import NavBar from "../components/Navbar";

export default function about() {
    return (
        <div>
            <NavBar />
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
            </ul>
        </div>
    )
}