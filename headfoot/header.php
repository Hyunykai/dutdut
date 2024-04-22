<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="../css/style.css"> <!-- CSS 스타일 연결 -->
</head>
<body>
    <header>
        <div class="header-container">
            <a href="/" class="logo"><img src="../image/Mu.png" alt="Logo" class="logoimg"></a>
            <nav>
                <ul id="topMenu">
                    <li><a href="#">LOUNGE</a>
                    </li>
                    <li><a href="#">ABOUT</a>
                    </li>
                    <li><a href="#">SUPPORT</a>
                    </li>
                </ul>
            </nav>
            <a class="loginButton" id="logbt">로그인</a>
            <script>
        document.getElementById('logbt').addEventListener('click', function() {
            alert('munit은 아직 제작중으로, 로그인 페이지가 매우 불안정합니다. 그래도 이동하시겠습니까? (개발자용)');
            window.location.href = '/login'; // 이동하고 싶은 URL로 수정하세요
        });
            </script>
            <div id="menuTogle">
                <img class="tog" src="https://munit.me/image/hamburger.svg">
            </div>
        </div>
    </header>
    <!-- 이전에 여기 있던 code.js 스크립트 태그 제거 -->
    <script src="https://munit.me/mobile.js" defer></script>
</body>
</html>


