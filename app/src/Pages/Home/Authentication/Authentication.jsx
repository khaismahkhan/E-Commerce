import React from 'react'
import SignupForm from '../../../Components/SignupForm/SignupForm'
import SigninForm from '../../../Components/SignupForm/SigninForm/SigninForm'
import Signout from '../../../Components/SignupForm/Signout/Signout'
import GoogleSigninButton from '../../../Components/SignupForm/GoogleSignInButton/GoogleSigninButton'

const Authentication = () => {
    return (
        <div>
            <h1>Authentication</h1>
            <SignupForm/>
            <SigninForm/>
            <GoogleSigninButton/>
            <Signout/>
        </div>
    )
}

export default Authentication
