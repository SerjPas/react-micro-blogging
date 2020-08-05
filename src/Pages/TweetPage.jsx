import React, {useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import CreateTweet from "../components/createTweet";
import TweetList from "../components/TweetList";
import LoadingIndicator from "../components/Loader";
import TweetContext from "../context/TweetContext";
import {usePromiseTracker} from "react-promise-tracker";
import * as firebase from "firebase";

const TweetPage = () => {
    const [tweets, setTweets] = useState([]);
    const [load, setLoad] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const {promiseInProgress} = usePromiseTracker();

    useEffect(() => {
            try {
                firebase
                    .firestore()
                    .collection("tweets")
                    .orderBy('date', 'desc')
                    .onSnapshot((snap) => {
                        const tweets = snap.docs.map((doc) => {
                            return {
                                id: doc.id,
                                ...doc.data(),
                                date: new Date(doc.data().date.seconds * 1000) +""
                            };
                        });
                        setTweets(tweets);
                        setLoad(false)
                    });
            } catch
                (error) {
                setErrorMessage(error.message);
            }
        } ,[]);


    const addTweet = (tweet) => {
        setTweets([tweet, ...tweets]);
    };

    const addTweets = (arr) => {
        setTweets(arr);
    };
    const handleErrorMessage = (error) => {
        setErrorMessage(error);
    };

    const handleLoad = (bool) => {
        setLoad(bool);
    }

    return (
        <TweetContext.Provider
            value={{tweets, handleLoad, addTweet, addTweets, handleErrorMessage}}
        >
            <div>
                <Container maxWidth="sm">
                    <CreateTweet/>
                    {promiseInProgress || load ? <LoadingIndicator/> : ""}
                    {errorMessage && <h3 className="error">{errorMessage}</h3>}
                    <TweetList/>
                </Container>
            </div>
        </TweetContext.Provider>
    );
};

export default TweetPage;