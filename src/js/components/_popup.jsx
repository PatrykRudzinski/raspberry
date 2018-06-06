import React from 'react';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            errors: []
        };

        // wypisuje poprawny login i haslo zeby latwiej testowac
        console.group('Login Data');
            console.log("correct_login@example.com");
            console.log("C0rr3Ct_P@55w0rd");
        console.groupEnd();
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

    submitHandle = (e) => {

        e.preventDefault();

        // funkcja validate zwraca true jesli wszystk ok,
        // w innym przypadku uzupelnia state o błedy
        this.validate() && this.sendData(e);

    };

    validate = () => {

        const errors = [];

        const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        // walidacja Emaila
        if (!emailRegEx.test(this.state.email.toLowerCase())) {
            errors.push('* Your Email is invalid');
        }

        // walidacja czy podane zostalo haslo
        if (!this.state.pass.length) {
            errors.push('* If you want login we need password');
        }

        // wyslanie bledow do state
        if (errors.length) {
            this.setState({
                errors: errors
            });
            return false;
        }

        // wyczyszczenie state (jesli przy poprzedniej probie byl blad)
        this.setState({
            errors: []
        });

        return true;

    };

    sendData = () => {

        const url = 'http://recruitment-api.pyt1.stg.jmr.pl/login';
        const data = {
            "login": this.state.email,
            "password": this.state.pass
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(function(res) {
            return res.json();
        })
            .then((res)=> {
            if(res.status !== 'ok') {
                this.setState({
                    errors: [res.message]
                })
            } else {
                this.props.closePopup();
                console.log(res.message);
            }
        });
    };

    render() {

        const errors = this.state.errors.map((e, i)=>{
            return <p key={i}>{e}</p>
        });

        const errorsContainer = <div className='popup__error'>
            {errors}
        </div>;

        return <div className='login-popup'>
            <form
                action='POST'
                className='popup__form'
                onSubmit={this.submitHandle}
            >
                <h3 className='popup__title'>Are you a Raspberry Knight?</h3>
                <input
                    className='popup__input'
                    type="text"
                    name="email"
                    placeholder='Email'
                    onInput={this.updateEmail}
                />
                <input
                    className='popup__input'
                    type="password"
                    name="password"
                    placeholder='Password'
                    onInput={this.updatePass}
                />
                {errors.length ? errorsContainer : null}
                <button className='popup__btn' type='submit'>Log in</button>
            </form>
        </div>
    };
}

export {Popup};