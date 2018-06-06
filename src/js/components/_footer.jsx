import React from 'react';

class Footer extends React.Component {
    render() {
        return <footer className={'page-footer'}>
            <div className={'footer__copy'}>&copy; 2014 Raspberry kingdom</div>
            <nav className={'footer__nav'}>
                <ul className={'nav__menu'}>
                    <li className={'menu__item'}><a href="#">Cookies</a></li>
                    <li className={'menu__item'}><a href="#">Privacy</a></li>
                </ul>
            </nav>
            <div className={'footer__design'}>Design by <span>Wizard of Oz</span></div>
        </footer>
    }
}

export {Footer};