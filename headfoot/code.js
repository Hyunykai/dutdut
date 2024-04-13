// Import Firebase functions (이 부분은 code.js 파일 상단에 있어야 합니다.)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// Firebase configuration (프로젝트에 맞게 설정하세요)
const firebaseConfig = {
    apiKey: "AIzaSyAnf7jMvqle6VxKiFZkdC5yVsGE-7ZWbSg",
    authDomain: "dutdut-fa20a.firebaseapp.com",
    projectId: "dutdut-fa20a",
    storageBucket: "dutdut-fa20a.appspot.com",
    messagingSenderId: "797210029917",
    appId: "1:797210029917:web:e9b8b330a7707199d082b4",
    measurementId: "G-Q9MY1LQQS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check auth state
onAuthStateChanged(auth, user => {
    const loginBtn = document.getElementById('loginBtn');
    if (user) {
        // User is signed in, hide the login button
        loginBtn.style.display = 'none';
    } else {
        // No user is signed in, show the login button
        loginBtn.style.display = 'block';
    }
});
