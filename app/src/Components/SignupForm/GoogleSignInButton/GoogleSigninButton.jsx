import React from 'react'
import { connect } from 'react-redux'
import {googleSignin} from '../../../Redux/auth/authActions'

const GoogleSigninButton = ({googleSignin}) => {
    return (
        <div>
            <button onClick={googleSignin}>Google Signin</button>
        </div>
    )
}

var action ={
    googleSignin
}

export default connect(null,action)(GoogleSigninButton)
