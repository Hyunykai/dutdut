document.addEventListener("DOMContentLoaded", function() {
    fetch('/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header_hf').innerHTML = data);

    fetch('/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer_hf').innerHTML = data);
});
