import React from 'react';

class Menu extends React.Component {
    render() {
        return <div className={'page-topbar'}>
                <nav className={'nav'}>
                    <ul className={'nav__menu'}>
                        <li className={'menu__item'}><a href="#">About</a></li>
                        <li className={'menu__item'}><a href="#">Offer</a></li>
                        <li className={'menu__item menu__item--icon'}>
                            <a href="#"><img src="./images/raspberry.png" alt=""/></a>
                        </li>
                        <li className={'menu__item'}><a href="#">Gallery</a></li>
                        <li className={'menu__item'}><a href="#">Contact</a></li>
                    </ul>
            </nav>
        </div>
    }
}

export {Menu};