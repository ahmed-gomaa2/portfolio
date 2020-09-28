import React from 'react';
import './css/Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
    const [open , setOpen] = React.useState(false)

    const handleBurgerClick = () => {
        setOpen(!open)
    }

    return (
        <div className={'header'}>
            <nav className="header__nav">
                <div className="header__left">
                    <a href="" className="header__logo"><h3>AG</h3></a>
                </div>
                <div className="header__right">
                    <ul className={`header__rightList ${open && 'header__rightListOpened'}`}>
                        <li className="header__rightListItem">
                            <a href="#about" className="header__rightListItemLink">About</a>
                        </li>
                        <li className="header__rightListItem">
                            <a href="#projects" className="header__rightListItemLink">Projects</a>
                        </li>
                        <li className="header__rightListItem">
                            <a href="#footer" className="header__rightListItemLink">Contacts</a>
                        </li>
                    </ul>
                    {!open ? <MenuIcon onClick={handleBurgerClick} className={'header__burger'} /> : <CloseIcon onClick={handleBurgerClick} className={'header__burger'} />}


                </div>
            </nav>

        </div>
    );
};

export default Header;