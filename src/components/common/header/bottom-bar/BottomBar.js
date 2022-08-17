import Logo from "./logo/Logo";
import Search from "./search/Search";
import UserButtons from "./user-buttons/UserButtons";

export default function BottomBar() {
    return (
        <div className="bottom-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <Logo />
                    {/* <Search /> */}
                    <UserButtons />
                </div>
            </div>
        </div>
    );
}