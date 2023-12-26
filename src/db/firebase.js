import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAi_ZMjG1078P11ymtDepdqdmglEtECx0g",
  authDomain: "id-card-generator-ef058.firebaseapp.com",
  projectId: "id-card-generator-ef058",
  storageBucket: "id-card-generator-ef058.appspot.com",
  messagingSenderId: "997883809377",
  appId: "1:997883809377:web:0a2e76e484c2cbc3a5a420",
  measurementId: "G-2PXCTTLR5R",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
