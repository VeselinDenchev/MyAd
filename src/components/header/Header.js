import BottomBar from "./bottom-bar/BottomBar";
import NavBar from "./nav-bar/NavBar";
import TopBar from "./top-bar/TopBar";

export default function Header() {
    return (
        <header>
            <TopBar />
            <NavBar />
            <BottomBar />
        </header>
    );
}