import React from 'react';

class Footer extends React.Component {
    render() {
        return <footer className={'page-footer'}>
            <div className={'footer__copy'}>&copy; Raspberry kingdom</div>
            <nav className={'footer__nav'}>
                <ul className={'nav__menu'}>
                    <li className={'menu__item'}>Cookies</li>
                    <li className={'menu__item'}>Privacy</li>
                </ul>
            </nav>
            <div>Design by <span>Wizard of Oz</span></div>
        </footer>
    }
}

export {Footer};