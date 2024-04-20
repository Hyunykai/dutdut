// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyDTY21l_Q_1BbvU8DNU1CYsXbUdJk9hHEw",
    authDomain: "co-munit.firebaseapp.com",
    projectId: "co-munit",
    storageBucket: "co-munit.appspot.com",
    messagingSenderId: "960543617483",
    appId: "1:960543617483:web:e629fdb99b17dd2992c64e",
    measurementId: "G-G36BX3PG00"
}
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nextStepBtn1').addEventListener('click', saveStep1AndProceed);
    document.getElementById('nextStepBtn2').addEventListener('click', saveStep2AndProceed);
    document.getElementById('completeRegistrationBtn').addEventListener('click', completeRegistration);
});

function saveStep1AndProceed() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    showStep(2);
}

function saveStep2AndProceed() {
    const nickname = document.getElementById('nickname').value;
    localStorage.setItem('nickname', nickname);
    showStep(3);
}

function completeRegistration() {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        // 여기에 사용자 추가 정보를 Firestore에 저장하는 코드 추가 가능
        showStep('welcome');
    }).catch((error) => {
        console.error('Registration Error:', error);
    });
}

function showStep(stepNumber) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => { step.style.display = 'none'; });
    if (stepNumber === 'welcome') {
        document.getElementById('welcome').style.display = 'block';
    } else {
        document.getElementById(`step${stepNumber}`).style.display = 'block';
    }
}
