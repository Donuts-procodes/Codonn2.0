

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNTYR-g_365XlpLLN7zgnIHGL_AxWwRUM",
  authDomain: "codonn-web.firebaseapp.com",
  projectId: "codonn-web",
  storageBucket: "codonn-web.firebasestorage.app",
  messagingSenderId: "457609775783",
  appId: "1:457609775783:web:d4385addfe223167246982"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the authentication instance
export const auth = getAuth(app);
