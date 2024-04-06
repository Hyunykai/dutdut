document.addEventListener("DOMContentLoaded", function() {
    fetch('hf/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header_hf').innerHTML = data);

    fetch('hf/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer_hf').innerHTML = data);
});
