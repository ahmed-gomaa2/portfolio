import React, {useEffect, useRef} from 'react';
import './css/Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import gsap from 'gsap'

const Header = () => {
    const [open , setOpen] = React.useState(false)

    const handleBurgerClick = () => {
        setOpen(!open)
    }



    useEffect(() => {
        const t1 = gsap.timeline({defaults: {ease: "power1.out"}});
        t1.fromTo('.showing',1,  {opacity:0}, {opacity:1})
    }, [])

    return (
        <div className={'header'}>
            <nav className="header__nav">
                <div className="header__left">
                    <a href="/" className="showing header__logo"><h3>{'</AG>'}</h3></a>
                </div>
                <div className="header__right">
                    <ul className={`header__rightList ${open && 'header__rightListOpened'}`}>
                        <li className="header__rightListItem">
                            <a href="#about" className="showing header__rightListItemLink">About</a>
                        </li>
                        <li className="header__rightListItem">
                            <a href="#projects" className="showing header__rightListItemLink">Projects</a>
                        </li>
                        <li className="header__rightListItem">
                            <a href="#footer" className="showing header__rightListItemLink">Contacts</a>
                        </li>
                    </ul>
                    {!open ? <MenuIcon onClick={handleBurgerClick} className={'header__burger'} /> : <CloseIcon onClick={handleBurgerClick} className={'header__burger'} />}


                </div>
            </nav>

        </div>
    );
};

export default Header;