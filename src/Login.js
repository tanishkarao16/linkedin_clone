import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }));
            })
            .catch((error) => alert(error));
    };

    const register = () => {
        if (!name || !email || !password) {
            return alert('Please fill in all fields');
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return user.updateProfile({
                    displayName: name,
                    photoURL: profilePicture
                });
            })
            .then(() => {
                dispatch(login({
                    email: email,
                    uid: auth.currentUser.uid,
                    displayName: name,
                    profileUrl: profilePicture
                }));
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/aa/LinkedIn_2021.svg"
                alt="LinkedIn Logo"
            />
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name required"
                    type="text"
                />
                <input
                    value={profilePicture}
                    onChange={(e) => setProfilePicture(e.target.value)}
                    placeholder="Profile picture"
                    type="text"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                />
                <button type="submit" onClick={loginToApp}>
                    Sign In
                </button>
            </form>
            <p>
                Not a member?{' '}
                <span className="login_register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    );
}

export default Login;
