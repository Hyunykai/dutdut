document.addEventListener("DOMContentLoaded", function() {
    fetch('https://munit.site/headfoot/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header_hf').innerHTML = data;
            attachHeaderListeners();
            initializeFirebaseAuth(); // Firebase Auth 초기화 및 리스너 설정
        });

    fetch('https://munit.site/headfoot/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer_hf').innerHTML = data;
        });
});

function attachHeaderListeners() {
    var script = document.createElement('script');
    script.src = "https://munit.site/mobile.js"; // 이 경로를 mobile.js의 실제 경로로 변경
    document.head.appendChild(script);
}

function initializeFirebaseAuth() {
    import('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js').then(({ initializeApp }) => {
        import('https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js').then(({ getAuth, onAuthStateChanged }) => {
            const firebaseConfig = {
                apiKey: "AIzaSyDTY21l_Q_1BbvU8DNU1CYsXbUdJk9hHEw",
                authDomain: "co-munit.firebaseapp.com",
                projectId: "co-munit",
                storageBucket: "co-munit.appspot.com",
                messagingSenderId: "960543617483",
                appId: "1:960543617483:web:e629fdb99b17dd2992c64e",
                measurementId: "G-G36BX3PG00"
            };

            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);

            onAuthStateChanged(auth, (user) => {
                const loginButton = document.getElementById('logbt');
                if (user) {
                    console.log("로그인상태입니다.");
                    loginButton.classList.add('hidden');
                } else {
                    console.log("로그아웃상태입니다.");
                    loginButton.classList.remove('hidden');
                }
            });
        });
    });
}


