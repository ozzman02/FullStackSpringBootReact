/* eslint-disable react-hooks/exhaustive-deps */
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import User from '../../models/user.js';
import authenticationService from '../../services/authentication-service';
import './register-page.css';

const RegisterPage = () => {

    const [user, setUser] = useState(new User('', '', ''));

    const [loading, setLoading] = useState(false);
    
    const [submitted, setSubmitted] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const currentUser = useSelector(state => state.user);

    const navigate = useNavigate();

    /* Invoke only once since array of deps is empty */
    useEffect(() => {
        if (currentUser?.id) {
            navigate('profile');
        }
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const handleRegister = (event) => {
        event.preventDefault();
        console.log(user);
        setSubmitted(true);
        if (!user.username || !user.password || !user.name) {
            return;
        }
        setLoading(true);
        authenticationService.register(user).then(_ => {
            navigate('/login');
        }).catch((error) => {
            console.log(error);
            if (error?.response?.status === 409) {
                setErrorMessage('Username or password is not valid.');
            } else {
                setErrorMessage('Unexpected error occurred');   
            }
            setLoading(false);
        });
    };

    return (
        <div className="container mt-5">
            <div className="card ms-auto me-auto p-3 shadow-lg custom-card">
                <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon" />
                { errorMessage && <div className="alert alert-danger">{errorMessage}</div> }
                <form 
                    onSubmit={handleRegister} 
                    noValidate 
                    className={submitted ? 'was-validated' : ''}
                >
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control"
                            placeholder="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Full Name is required</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            name="username" 
                            className="form-control"
                            placeholder="username"
                            value={user.username}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Username is required</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control"
                            placeholder="password"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Password is required</div>
                    </div>
                    <button className="btn btn-info w-100 mt-3" disabled={loading}>Sign Up</button>
                </form>
                <Link to="/login" className="btn btn-link" style={{ color: 'darkgray' }}>I have an account!</Link>
            </div>
        </div>
    );
}

export { RegisterPage };

