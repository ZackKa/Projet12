import { NavLink } from "react-router"
import HomeLogo from '../../assets/logo.png'

function Header() {
    return(
        <header className="relative z-10 flex flex-row items-center justify-between p-6 bg-black text-white">
            <img className="w-44" src={HomeLogo} alt="Logo" />
            <nav className="flex w-5/6 flex-row justify-around ">
                <NavLink to="/" >Accueil</NavLink>
                <NavLink to="/Profil/12" >Profil</NavLink>
                <NavLink to="/" >Réglage</NavLink>
                <NavLink to="/" >Communauté</NavLink>
            </nav>
      </header>
    )
}
export default Header