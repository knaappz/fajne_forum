import './header.css';
import './h-responsive.css';


function Header() {
    return(
        <header>
           <div className="navbar">
                <a href="https://fajneforum.netlify.app/">
                <li>Start</li>
                </a> 
                <a href="#ococho">
                <li>O co chodzi?</li>
                </a>                
                <a href="#onas"><li>O nas</li></a>
            </div>
        </header>
    )
}

export default Header;
