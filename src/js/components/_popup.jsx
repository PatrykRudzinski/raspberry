import React from 'react';

class Popup extends React.Component {
    render() {
        return <div className={'login-popup'}>
            <form action="POST">
                <h3 className={'popup__title'}>Are you a Raspberry Knight?</h3>
                <input type="text" placeholder={'Email'}/>
                <input type="password" placeholder={'Password'}/>
                <button type='submit'>Log in</button>
            </form>

        </div>
    }
}

export {Popup};