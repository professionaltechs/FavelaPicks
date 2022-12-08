import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, firebase } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyB1MF1mDskvtOoOy0AJnpitps8d3z_zzMU",
    authDomain: "favelapicks.firebaseapp.com",
    projectId: "favelapicks",
    storageBucket: "favelapicks.appspot.com",
    messagingSenderId: "468644606346",
    appId: "1:468644606346:web:feeb9c7346cff603389873",
    measurementId: "G-57H62N486Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app,auth}