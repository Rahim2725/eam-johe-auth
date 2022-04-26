// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUKhV59CIQYE_1u1A9Cx6eFVMkCmKg78U",
  authDomain: "eme-jone-simple.firebaseapp.com",
  projectId: "eme-jone-simple",
  storageBucket: "eme-jone-simple.appspot.com",
  messagingSenderId: "740423107410",
  appId: "1:740423107410:web:3206810804daead97e308b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;