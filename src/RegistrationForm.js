import React, {useState} from "react";
import FirstLast from "./FirstLast";
import EmailPassword from "./EmailPassword";
import {Button} from "@mui/material";
export default function RegistrationForm() {

    const [state, setState] = useState({
        firstName : '',
        firstNameError : null,
        lastName :  '',
        lastNameError :  null,
        email:      '',
        emailError:      null,
        password:   '',
        passwordError:   null,
    })

    const errorMessages = {
        firstNameError: 'Min length is 2 symbols, numbers and special symbols are not allowed',
        lastNameError: 'Min length is 2 symbols, numbers and special symbols are not allowed',
        emailError: 'Invalid email',
        passwordError: 'Password requirements: 6-10 symbols, at least 1 uppercase character and at least 1 number',
    }

    const update = event => {
        const target = event.currentTarget

        let isValid = validationRules(target.name, target.value);

        if (isValid) {
            console.log('State is valid')
            setState({
                ...state,
                [target.name]: target.value,
                [target.name + 'Error']: null
            })
        } else {
            console.log('State is invalid')
            setState({
                ...state,
                [target.name]: target.value,
                [target.name + 'Error']: errorMessages[target.name + 'Error']
            })
        }
    }

    const isValidName = name => {
        console.log("Name validation: " + name)
        const regex = /^(?!.*\\d)[A-Za-z ]{2,}$/

        return regex.test(String(name))
    }
    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return regex.test(String(email).toLowerCase())
    }
    const isValidPassword = password => {
        const regex = /^(?=.*[A-Z])(?=.*[0-9]).{6,10}$/
        return regex.test(String(password))
    }

    function isFormValid() {
        return state.firstName !== '' &&
            state.firstNameError === null &&
            state.lastName !== '' &&
            state.lastNameError === null &&
            state.email !== '' &&
            state.emailError === null &&
            state.password !== '' &&
            state.passwordError === null
    }

    const validationRules = (key, value) =>{
        if (key === 'firstName') return isValidName(value);
        else if (key === 'lastName') return isValidName(value);
        else if (key === 'email') return isValidEmail(value);
        else if (key === 'password') return isValidPassword(value);
    }

    return (
        <React.Fragment>
            <form autoComplete="false">
                <h2>Registration form</h2>
                <FirstLast state={state} update={update}/>
                <EmailPassword state={state} update={update}/>
                <Button variant="outlined" color="secondary" type="submit" disabled={!isFormValid()}>Register</Button>
            </form>
        </React.Fragment>
    );
}