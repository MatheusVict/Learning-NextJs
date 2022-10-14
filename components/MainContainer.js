import Footer from "./Footer";
import NavBar from "./Navbar";

export default function MainContainer({ children }) {
    return (
        <>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}