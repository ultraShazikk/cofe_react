import "./Footer.css";
import CofeLogo from "../img/Group5.svg";
import fsb from "../img/fsb.svg";
import twt from "../img/twt.svg";
import ins from "../img/ins.svg";

// JSX
// class => className

function Footer() {
    return (
        <>
            <header className="footer">
                <div className="container">
                    <div className="box">
                        <a className="footer__link" href="#link">
                            <img
                                className="footer__logo"
                                src={CofeLogo}
                                alt="cofe logo"
                                width="237"
                                height="27"
                            />
                        </a>

                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a className="nav__link" href="#link">
                                        Home
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a className="nav__link" href="#link">
                                        ABOUT US
                                    </a>
                                </li>

                                <li className="nav__item">
                                    <a className="nav__link" href="#link">
                                        Create your plan
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex">
                        <img src={fsb} alt="img" width="24" height="24"/>
                        <img src={twt} alt="img" width="24" height="24"/>
                        <img src={ins} alt="img" width="24" height="24"/>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Footer;
