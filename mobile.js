document.addEventListener('DOMContentLoaded', function() {
    // 모든 상위 메뉴 항목을 선택
    var topMenuItems = document.querySelectorAll('#topMenu > li');

    // 각 상위 메뉴 항목에 대해 이벤트 리스너를 추가
    topMenuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // 기본 이벤트 방지
            event.preventDefault();

            // 현재 클릭된 메뉴 항목의 직속 하위 메뉴를 찾음
            var subMenu = this.querySelector('.sub-menu');

            // 하위 메뉴가 있으면 표시 상태를 토글
            if (subMenu) {
                // 이미 표시된 하위 메뉴를 숨기는 경우, 'display: none;'을 설정
                // 표시되지 않은 하위 메뉴를 보이게 하는 경우, 'display: block;'을 설정
                var isDisplayed = subMenu.style.display === 'block';
                subMenu.style.display = isDisplayed ? 'none' : 'block';

                // 다른 모든 하위 메뉴를 숨김
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
});