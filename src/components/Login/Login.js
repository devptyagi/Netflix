import './Login.css';
import netflixLogo from '../../netflix-logo.png';
import Signup from '../Signup/Signup';
import { useState } from 'react';

const Login = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className='login'>
            <div className="login__background">
                <img className="login__logo" src={netflixLogo} alt="" />
                <button onClick={() => setSignIn(true)} className='login__button'>Sign In</button>
                <div className="login__gradient"/>
            </div>
            <div className="login__body">
                {signIn ? (
                    <Signup/>
                ) : (
                    <>
                        <h1>Unlimited films, TV programs and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                        <div className="login__input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button onClick={() => setSignIn(true)} className="login__getStartedBtn">GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Login
