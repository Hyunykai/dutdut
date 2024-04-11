import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Google 인증 제공자 객체 생성
const provider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const googleLoginBtn = document.getElementById('googleLoginBtn');

    if(loginBtn) {
        loginBtn.addEventListener('click', login);
    }

    if(googleLoginBtn) {
        googleLoginBtn.addEventListener('click', googleLogin);
    }
    
    // 로그인 상태 유지 체크박스 이벤트 처리
    const rememberMe = document.getElementById('rememberMe');
    if(rememberMe) {
        rememberMe.addEventListener('change', function() {
            if (this.checked) {
                const email = document.getElementById('email').value;
                localStorage.setItem('savedId', email);
            } else {
                localStorage.removeItem('savedId');
            }
        });
    }
});

function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Logged in as:", userCredential.user.email);
            window.location.href = 'https://dutdut.site';
        })
        .catch((error) => {
            console.error("Login failed:", error);
            alert("Login failed: " + error.message);
        });
}

function googleLogin(event) {
    event.preventDefault();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Google signed in as:", result.user.email);
            window.location.href = 'https://dutdut.site';
        })
        .catch((error) => {
            console.error("Google login failed:", error);
            alert("Google login failed: " + error.message);
        });
}
