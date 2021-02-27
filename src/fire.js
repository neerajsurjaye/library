import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


let fire = (() => {
    var firebaseConfig = {
        apiKey: "AIzaSyB_VjIGspuBhLV8wIIbwPkXnTcHIWjtA3w",
        authDomain: "projectlibrary-a2643.firebaseapp.com",
        projectId: "projectlibrary-a2643",
        storageBucket: "projectlibrary-a2643.appspot.com",
        messagingSenderId: "21641913206",
        appId: "1:21641913206:web:499f045bfecc5b494ed057"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    let db;
    let auth;
    let init = () => {
        auth = firebase.auth();
        db = firebase.firestore();
        console.log(auth, db);
    }

    let addData = async (data) => {
        await db.collection("main").doc("id").set(data);
    }



    let login = async () => {
        let user = firebase.auth().currentUser;

        if (user) {
            console.log(user.displayName);
        } else {
            let provider = await new firebase.auth.GoogleAuthProvider();
            await firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;

                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // The signed-in user in    fo.
                    var user = result.user;
                    // ...
                }).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });
        }
    }

    return { init, addData, login };
})();

export default fire;