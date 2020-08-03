import React, {useContext, useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import {Button, Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import {signin, signInWithGoogle} from "../auth";
import UserContext from "../context/UserContext";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 52,
        width: 545,
        backgroundColor: "#16202C",
        margin: 0,
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


const Login = () => {
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');
        try {
            const user = await signin(email, password);
            console.log(user , "sign in")
            context.handleCurrentUser(user);
            setEmail('');
        } catch (error) {
            setError(error.message);
            setPassword('');
        }
    }

    async function googleSignIn() {
        try {
            const user = await signInWithGoogle();
            context.handleCurrentUser(user);

        } catch (error) {
            setError(error.message);
            setPassword('');
        }
    }

    return (
        <Container className={classes.container}>
            <div className={classes.root}>
                {context.currentUser ? (<Redirect to={{pathname: '/tweets'}}/>) : (
                    <form
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <h1>
                            Login to
                            <Link to="/login"> MicroBlog</Link>
                        </h1>
                        <p>
                            Fill in the form below to login to your account.
                        </p>
                        <div>
                            <input
                                className="auth-input"
                                placeholder="Email"
                                name="email"
                                type="email"
                                onChange={(event => setEmail(event.target.value))}
                                value={email}
                            />
                        </div>
                        <div>
                            <input
                                className="auth-input"
                                placeholder="Password"
                                name="password"
                                onChange={(event => setPassword(event.target.value))}
                                value={password}
                                type="password"
                            />
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
                        <hr/>
                        <div style={{display: "flex"}}>
                            <Button type="button" fullWidth
                                    variant="contained"
                                    onClick={googleSignIn}
                                    color="secondary">
                                Sign In with google
                            </Button>
                        </div>
                        <p>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </p>
                    </form>
                )}
            </div>
        </Container>
    );
}

export default Login