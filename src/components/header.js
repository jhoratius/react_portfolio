import { NavLink } from 'react-router-dom';
import Horatius from '../img/horatius-logo3.png';

const Header = () => {
    return (
        <header>
            <NavLink exact to="/"> <img src={Horatius} alt="developping"/> </NavLink>
            <NavLink exact to="/objectifs" activeClassName="nav-active"> <span>Objectifs</span> </NavLink>
            <NavLink exact to="/experiences" activeClassName="nav-active"> <span>Expériences</span> </NavLink>
            <NavLink exact to="/formations" activeClassName="nav-active"> <span>Formations</span> </NavLink>
            <NavLink exact to="/competences" activeClassName="nav-active"> <span>Compétences</span> </NavLink>
        </header>
    )
}

export default Header;