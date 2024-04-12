var topMenuItems = document.querySelectorAll('#topMenu > li');
var menuToggle = document.getElementById('menuTogle');
var mobileMenu = document.querySelector('.mobile-menu');

// 상위 메뉴 항목 클릭 이벤트 리스너 설정
topMenuItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
        // 기본 이벤트 방지
        event.preventDefault();

        // 하위 메뉴 토글
        console.log(menuToggle);  // 이 코드를 통해 요소가 정상적으로 찾아졌는지 확인
        var subMenu = this.querySelector('.sub-menu');
        if (subMenu) {
            var isDisplayed = subMenu.style.display === 'block';
            subMenu.style.display = isDisplayed ? 'none' : 'block';

            // 다른 하위 메뉴 숨김
            topMenuItems.forEach(function(otherItem) {
                if (otherItem !== item) {
                    var otherSubMenu = otherItem.querySelector('.sub-menu');
                    if (otherSubMenu) {
                        otherSubMenu.style.display = 'none';
                    }
                }
            });
        }
    });
});

// 햄버거 메뉴 토글 로직 추가
menuToggle.addEventListener('click', function() {
    console.log("햄버거 메뉴 클릭!");
    // 모바일 메뉴의 표시 상태를 토글합니다.
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});
