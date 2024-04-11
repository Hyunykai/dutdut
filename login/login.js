// firebase-init.js에서 export된 객체와 함수들을 import
import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Google 인증 제공자 객체 생성
const provider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginBtn').addEventListener('click', login);
    document.getElementById('googleLoginBtn').addEventListener('click', googleLogin);
    
    // 페이지 로드 시 저장된 아이디 채우기
    const savedId = localStorage.getItem('savedId');
    if (savedId) {
        document.getElementById('email').value = savedId;
        document.getElementById('rememberMe').checked = true;
    }
});

function login(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // 로그인 성공
            console.log("Logged in as:", userCredential.user.email);
            window.location.href = 'https://dutdut.site'; // 로그인 성공 시 리다이렉션
        })
        .catch((error) => {
            // 로그인 실패
            console.error("Login failed:", error);
            alert("Login failed: " + error.message);
        });
}

function googleLogin(event) {
    event.preventDefault(); // 기본 동작 방지
    signInWithPopup(auth, provider)
        .then((result) => {
            // 구글 로그인 성공
            console.log("Google signed in as:", result.user.email);
            window.location.href = 'https://dutdut.site'; // 구글 로그인 성공 시 리다이렉션
        })
        .catch((error) => {
            // 구글 로그인 실패
            console.error("Google login failed:", error);
            alert("Google login failed: " + error.message);
        });
}

// 로그인 상태 유지 체크박스 이벤트 처리
document.getElementById('rememberMe').addEventListener('change', function() {
    if (this.checked) {
        localStorage.setItem('savedId', document.getElementById('email').value);
    } else {
        localStorage.removeItem('savedId');
    }
});

