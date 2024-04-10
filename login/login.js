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
// 로그인 시 아이디 저장
if (document.getElementById('rememberMe').checked) {
    localStorage.setItem('savedId', document.getElementById('loginId').value);
  }
  // 페이지 로드 시 저장된 아이디 채우기
document.addEventListener('DOMContentLoaded', function() {
    const savedId = localStorage.getItem('savedId');
    if (savedId) {
      document.getElementById('loginId').value = savedId;
      document.getElementById('rememberMe').checked = true;
    }
  });
  
