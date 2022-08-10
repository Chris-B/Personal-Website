import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCHt_QNGy9sYRs_mYxES3QSKOxkytxu4oM",
    authDomain: "chris-barclay-website.firebaseapp.com",
    projectId: "chris-barclay-website",
    storageBucket: "chris-barclay-website.appspot.com",
    messagingSenderId: "760676242168",
    appId: "1:760676242168:web:c903db73c16e2969fde10d",
    measurementId: "G-545Q2MVRKV"
};

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
