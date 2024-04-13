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

document.addEventListener('DOMContentLoaded', () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        const loginButton = document.getElementById('logbt');
        if (user) {
            loginButton.classList.add('hidden'); // 로그인 상태일 때 버튼 숨기기
        } else {
            loginButton.classList.remove('hidden'); // 로그아웃 상태일 때 버튼 표시
        }
    });
});
