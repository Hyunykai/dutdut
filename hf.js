document.addEventListener("DOMContentLoaded", function() {
    fetch('https://dutdut.site/headfoot/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header_hf').innerHTML = data);

    fetch('https://dutdut.site/headfoot/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer_hf').innerHTML = data);
});
