document.addEventListener("DOMContentLoaded", function() {
    fetch('https://dutdut.site/headfoot/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header_hf').innerHTML = data;
            attachHeaderListeners();
            initializeFirebaseAuth(); // Firebase Auth 초기화 및 리스너 설정
        });

    fetch('https://dutdut.site/headfoot/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer_hf').innerHTML = data;
        });
});

function attachHeaderListeners() {
    var script = document.createElement('script');
    script.src = "https://dutdut.site/mobile.js"; // 이 경로를 mobile.js의 실제 경로로 변경
    document.head.appendChild(script);
}

function initializeFirebaseAuth() {
    import('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js').then(({ initializeApp }) => {
        import('https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js').then(({ getAuth, onAuthStateChanged }) => {
            const firebaseConfig = {
                apiKey: "AIzaSyAnf7jMvqle6VxKiFZkdC5yVsGE-7ZWbSg",
                authDomain: "dutdut-fa20a.firebaseapp.com",
                projectId: "dutdut-fa20a",
                storageBucket: "dutdut-fa20a.appspot.com",
                messagingSenderId: "797210029917",
                appId: "1:797210029917:web:e9b8b330a7707199d082b4",
                measurementId: "G-Q9MY1LQQS3"
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


