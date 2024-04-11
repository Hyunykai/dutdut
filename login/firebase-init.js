// Firebase 모듈 가져오기
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase 프로젝트 설정
const firebaseConfig = {
    apiKey: "AIzaSyAnf7jMvqle6VxKiFZkdC5yVsGE-7ZWbSg",
    authDomain: "dutdut-fa20a.firebaseapp.com",
    projectId: "dutdut-fa20a",
    storageBucket: "dutdut-fa20a.appspot.com",
    messagingSenderId: "797210029917",
    appId: "1:797210029917:web:e9b8b330a7707199d082b4",
    measurementId: "G-Q9MY1LQQS3"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase 인증 객체 생성
const auth = getAuth(app);

// 다른 파일에서 사용할 수 있도록 export
export { auth };
