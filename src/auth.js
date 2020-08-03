import { auth } from "./index";

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

const provider = new auth.GoogleAuthProvider();
export function signupWithGoogle() {
    return auth().signInWithRedirect(provider)
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}