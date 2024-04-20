// Import Firebase functions (이 부분은 code.js 파일 상단에 있어야 합니다.)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// Firebase configuration (프로젝트에 맞게 설정하세요)
const firebaseConfig = {
    apiKey: "AIzaSyDTY21l_Q_1BbvU8DNU1CYsXbUdJk9hHEw",
    authDomain: "co-munit.firebaseapp.com",
    projectId: "co-munit",
    storageBucket: "co-munit.appspot.com",
    messagingSenderId: "960543617483",
    appId: "1:960543617483:web:e629fdb99b17dd2992c64e",
    measurementId: "G-G36BX3PG00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    // 이제 `auth` 변수는 이미 초기화된 인증 객체를 참조합니다.
    onAuthStateChanged(auth, (user) => {
        const loginButton = document.getElementById('logbt');
        if (user) {
            console.log("로그인상태입니다.");
            loginButton.classList.add('hidden'); // 로그인 상태일 때 버튼 숨기기
        } else {
            console.log("로그아웃상태입니다.");
            loginButton.classList.remove('hidden'); // 로그아웃 상태일 때 버튼 표시
        }
    });
});
