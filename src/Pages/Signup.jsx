import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {signup} from '../auth';
import {Button, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

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
        width: 68,
        height: 34,
        borderRadius: 4,
        alignSelf: "flex-end",
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

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');
        try {
            const user = await signup(email, password);
            console.log(user)
        } catch (error) {
            setError(error.message);
        }
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)

    }

    return (
        <Container className={classes.container}>
            <div className={classes.root}>
                <form className="form" onSubmit={(event => handleSubmit(event))}>
                    <h1>
                        Sign Up
                        <Link to="/"> MicroBlog</Link>
                    </h1>
                    <p>Fill in the form below to create an account.</p>
                    <div>
                        <input placeholder="Email" name="email" type="email" onChange={handleChangeEmail}
                               value={email} required/>
                    </div>
                    <div>
                        <input placeholder="Password" name="password" onChange={handleChangePassword}
                               value={password} type="password" required/>
                    </div>
                    <div>
                        {error ? <p>{error}</p> : null}
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
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </Container>
    )
}
export default SignUp