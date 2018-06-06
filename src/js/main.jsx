import React from 'react';
import ReactDOM from 'react-dom';
import {Menu} from "./components/_menu.jsx";
import {Hero} from "./components/_hero.jsx";
import {Footer} from "./components/_footer.jsx";
import {Popup} from "./components/_popup.jsx";

require('../sass/main.scss');

class App extends React.Component {
    render() {
        return <div>
            <Menu/>
            <Hero/>
            <Footer/>
            <Popup/>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
