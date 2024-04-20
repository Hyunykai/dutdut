// Firebase 모듈 가져오기
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase 프로젝트 설정
const firebaseConfig = {
    apiKey: "AIzaSyDTY21l_Q_1BbvU8DNU1CYsXbUdJk9hHEw",
    authDomain: "co-munit.firebaseapp.com",
    projectId: "co-munit",
    storageBucket: "co-munit.appspot.com",
    messagingSenderId: "960543617483",
    appId: "1:960543617483:web:e629fdb99b17dd2992c64e",
    measurementId: "G-G36BX3PG00"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase 인증 객체 생성
const auth = getAuth(app);

export { auth };