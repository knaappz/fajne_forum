import './header.css';

function Header() {
    return(
        <header>
           <div className="navbar">
                <li>Start</li>
                <a href="#ococho">
                <li>O co chodzi?</li>
                </a>                
                <a href="#onas"><li>O nas</li></a>
            </div>
        </header>
    )
}

export default Header;
