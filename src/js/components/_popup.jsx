import React from 'react';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        }
    }

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
            this.props.closePopup();
        });
    };

    submitHandle = (e) => {
        this.test(e);
    };

    updateEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    updatePass = (e) => {
        this.setState({
            pass: e.target.value
        })
    };

    render() {
        return <div className={'login-popup'}>
            <form
                className={'popup__form'}
                onSubmit={this.submitHandle}
            >
                <h3 className={'popup__title'}>Are you a Raspberry Knight?</h3>
                <input
                    className={'popup__input'}
                    type="text"
                    placeholder={'Email'}
                    onInput={this.updateEmail}
                />
                <input
                    className={'popup__input'}
                    type="password"
                    placeholder={'Password'}
                    onInput={this.updatePass}
                />
                <button className={'popup__btn'} type='submit'>Log in</button>
            </form>
        </div>
    }
}

export {Popup};