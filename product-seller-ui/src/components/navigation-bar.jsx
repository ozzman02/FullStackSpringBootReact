import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="https://reactjs.org" className='navbar-brand ms-1'>
                <img src={logo} className="App-logo" alt="logo" />
                React
            </a>
            <div className='navbar-nav me-auto'>
                <li className='nav-item'>
                    <NavLink href="/admin" className='nav-link'>Admin</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink href="/home" className='nav-link'>Home</NavLink>
                </li>
            </div>
            <div className='navbar-nav ms-auto'>
                <li className='nav-item'>
                    <NavLink href="/register" className='nav-link'>Sign Up</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink href="/login" className='nav-link'>Sign In</NavLink>
                </li>
            </div>
        </nav>
    );
}

export { NavigationBar }