import {auth} from "./index";

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
    return auth().signOut();

}