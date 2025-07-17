import sparkLogo from '../assets/sparkDarker.png'
import avatar from '../assets/avatar.jpg'
import { Outlet } from 'react-router-dom';

export function Header() {
    return(
        <>
        <header className="header-bar">
             <img src={sparkLogo} alt="Spark Logo" className="sparkLogo"/>
            <h1 className="logo"><a href="homepage.html" className="no-underline">SPARK</a></h1>
             <nav>
                <a href="/">Home</a>
                <a href="/community">Community</a>
                <a href="/knowledge">Knowledge Zone</a>
                <a href="/personal">Personalized Updates</a>
        </nav>
         <img src={avatar} alt="Avatar" className="avatar"/>
        <p className="userName">Tomahito Mori</p>
    </header>
    <Outlet />
    </>
)
}

export default Header

