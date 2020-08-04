import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {signup, signInWithGoogle} from '../auth';
import {Button, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {Redirect} from "react-router-dom"
import UserContext from "../context/UserContext";
import {db} from "../index";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 52,
        width: 545,
        backgroundColor: "#16202C",
    },
    button: {
        position: "relative",
        backgroundColor: "#007BFF",
        height: 34,
        borderRadius: 4,
        alignSelf: "flex-start",
    },
    container: {
        color: "white",
        width: "76%",
        display: "flex",
        justifyContent: "center",
    },
}));


const SignUp = () => {

    const classes = useStyles();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(UserContext)


    async function handleSubmit(event) {
        event.preventDefault();
        setError('');
        try {
            await signup(email, password);
            setEmail('');
        } catch (error) {
            setError(error.message);
            setPassword('');
        }
    }

    async function googleSignIn() {
        try {
            await signInWithGoogle();
        } catch (error) {
            setError(error.message);
            setPassword('');
        }
    }

    return (
        <Container className={classes.container}>
            <div className={classes.root}>
                {context.currentUser ? (<Redirect to={{pathname: '/tweets'}}/>) : (
                    <form onSubmit={(event => handleSubmit(event))}>
                        <h1>
                            Sign Up
                            <Link to="/login"> MicroBlog</Link>
                        </h1>
                        <p>Fill in the form below to create an account.</p>
                        <div>
                            <input
                                className="auth-input"
                                placeholder="Email" name="email" type="email"
                                onChange={(event => setEmail(event.target.value))}
                                value={email} required/>
                        </div>
                        <div>
                            <input
                                className="auth-input"
                                placeholder="Password" name="password"
                                onChange={(event => setPassword(event.target.value))}
                                value={password} type="password" required/>
                        </div>
                        <div>
                            {error && <Typography color="secondary">{error}</Typography>}
                            <Button
                                className={classes.button}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </div>
                        <hr></hr>
                        <div style={{display: "flex"}}>
                            <Button type="button" fullWidth
                                    variant="contained"
                                    onClick={googleSignIn}
                                    color="secondary">
                                Sign In with google
                            </Button>
                        </div>
                        <p>Already have an account? <Link to="/">Login</Link></p>
                    </form>
                )}

            </div>
        </Container>
    )
}
export default SignUp