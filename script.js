document.getElementById('jailbreak-button').addEventListener('click', function() {
    let progressBar = document.getElementById('progress-bar');
    let progressContainer = document.getElementById('progress-container');
    progressContainer.style.display = 'block';
    let width = 0;
    let interval = setInterval(function() {
        width += 25;
        progressBar.style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
        }
    }, 2000);
});
