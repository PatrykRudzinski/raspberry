import React from 'react';

class Popup extends React.Component {
    test = (e) => {
        e.preventDefault();

        const data = {
            "login": "correct_login@example.com",
            "password": "C0rr3Ct_P@55w0rd"
        };

        fetch('http://recruitment-api.pyt1.stg.jmr.pl/login', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
        });
    };

    render() {
        return <div className={'login-popup'}>
            <form>
                <h3 className={'popup__title'}>Are you a Raspberry Knight?</h3>
                <input type="text" placeholder={'Email'}/>
                <input type="password" placeholder={'Password'}/>
                <button type='submit' onClick={this.test}>Log in</button>
            </form>

        </div>
    }
}

export {Popup};