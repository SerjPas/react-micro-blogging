import React, {useContext, useState} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import * as firebase from 'firebase';
import Typography from "@material-ui/core/Typography";
import UserContext from "../context/UserContext";
import {auth} from "../index";

const useStyles = makeStyles((theme) =>
    createStyles({
        input: {
            display: 'none',
        },
    }),
);

const UploadButtons = () => {
    const classes = useStyles();
    const [error, setError] = useState(null);

    const userContext = useContext(UserContext)

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref('img/' + userContext.currentUser.email);
        const task = storageRef.put(file);
        task.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
        }, function (error) {
            setError(error.message)
        }, function () {
            // Upload completed successfully, we can get the download URL
            task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                let user = auth().currentUser;
                user.updateProfile({
                    photoURL: downloadURL
                }).then(() => {
                    console.log(user, " edited: " + downloadURL)
                    userContext.handleCurrentUser(user);
                }).catch((error) => {
                    setError(error.message)
                });
            });
        });
    }

    return (
        <div className={classes.root}>
            <input onChange={handleUpload} accept="image/*" className={classes.input} id="icon-button-file"
                   type="file"/>
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera/>
                </IconButton>
            </label>
            {error && <Typography color="secondary">{error}</Typography>}
        </div>
    );
}

export default UploadButtons