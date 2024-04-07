document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginBtn').addEventListener('click', login);
    document.getElementById('googleLoginBtn').addEventListener('click', googleLogin);
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
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

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
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
