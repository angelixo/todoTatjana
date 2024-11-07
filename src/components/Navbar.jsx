import { useUser } from "../contexts/userContext"

export const NavBar = () => {
    const { user } = useUser();

    return <nav className="navbar">
        <div className="navbar-left">
            My Custom APP
        </div>
        <div className="navbar-right">
            {user.username} / {user.pet.name}
        </div>
    </nav>
}