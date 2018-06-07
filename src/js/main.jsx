import React from 'react';
import ReactDOM from 'react-dom';

import {Menu} from './components/_menu.jsx';
import {Hero} from './components/_hero.jsx';
import {Footer} from './components/_footer.jsx';
import {Popup} from './components/_popup.jsx';

require('../sass/main.scss');

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            popupVisible: false
        };
    };

    togglePopup = () => {
        this.setState({
            popupVisible: !this.state.popupVisible
        });
    };

    render() {
        return <div>
            <Menu/>
            <Hero openPopup={this.togglePopup}/>
            <Footer/>
            {this.state.popupVisible && <Popup closePopup={this.togglePopup}/>}
        </div>
    };
}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});
