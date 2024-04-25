<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8"> <!--메타 카세트 설정-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="MUNIT과 함께 더욱 편리한 커뮤니케이션">
        <meta name="google-site-verification" content="gh1bhPxgj2RNQotVFufA6H4n5WFBLsa5aJwrE_ZYxWY" /> <!--구글 노출 설정-->
        <meta name="naver-site-verification" content="c70fbada5f85926fb6e8c32296b79e048663f0d5" /> <!--네이버 노출 설정-->
        <link rel="icon" type="image/png" href="https://munit.me/image/munit_papi.png">
        <meta property="og:title" content="MUNIT - 모두의 커뮤니티">
        <meta property="og:description" content="MUNIT과 함께 더욱 편리한 커뮤니케이션">
        <meta property="og:image" content="https://munit.me/image/munitlogo.png">
        <title>munit - 시작하기</title> <!--사이트 이름 설정-->
        <link rel="stylesheet" href="css/style.css"> <!--css스타일 연결-->
        <script type="module" src="login/firebase-init.js"></script>
    </head>
    <body>
        <div id="container">
        <?php include 'headfoot/header.php'; ?>
        <div id="box">
            <div id="intro">
                <p>더욱</p>
                <p class="chanint" id="txa">○○○</p>
                <script src="txtani.js"></script>
                <p>커뮤니티</p>
            </div>
            <div id="mainsq"></div>
        </div>
        <div id="getstart">
            <h2 class="hello">뮤닛의 세계로 빠져보세요!</h2>
            <br>
            <a href="/login" id="start">
                <input type="button" id="stbt" value="지금 시작하기" />
            </a>
        </div>
        <div id="info1">
            
        </div>
        <?php include 'headfoot/footer.php'; ?>
        </div>
    </body>
</html>
