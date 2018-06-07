import React from 'react';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpened: false
        }
    }

    toggleMenu = () => {
        this.setState({
            menuOpened: !this.state.menuOpened
        })
    };

    render() {
        return <header className={'page-topbar'}>
                <nav className={'nav'}>
                    <div className={this.state.menuOpened ?
                        'nav__hamburger nav__hamburger--open' : 'nav__hamburger'}
                        onClick={this.toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={this.state.menuOpened ?
                        'nav__menu' : 'nav__menu nav__menu--collapsed'}>
                        <li className={'menu__item'}>
                            <a href='#' onClick={this.toggleMenu}>About</a>
                        </li>
                        <li className={'menu__item'}>
                            <a href='#' onClick={this.toggleMenu}>Offer</a>
                        </li>
                        <li className={'menu__item--icon'}>
                           <img src='./images/raspberry.png' alt='raspberry logo'/>
                        </li>
                        <li className={'menu__item'}>
                            <a href='#' onClick={this.toggleMenu}>Gallery</a>
                        </li>
                        <li className={'menu__item'}>
                            <a href='#' onClick={this.toggleMenu}>Contact</a>
                        </li>
                    </ul>
            </nav>
        </header>
    };
}

export {Menu};