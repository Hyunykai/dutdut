document.addEventListener("DOMContentLoaded", function() {
    fetch('https://dutdut.site/headfoot/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header_hf').innerHTML = data;
            attachHeaderListeners();  // 헤더 로드 후 리스너 추가
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
