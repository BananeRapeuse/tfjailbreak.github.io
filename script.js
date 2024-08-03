document.getElementById('jailbreak-button').addEventListener('click', function() {
    let progressBar = document.getElementById('progress-bar');
    let progressContainer = document.getElementById('progress-container');
    progressContainer.style.display = 'flex';
    let height = 0;
    let interval = setInterval(function() {
        height += 20;
        progressBar.style.height = height + '%';
        if (height >= 100) {
            clearInterval(interval);
        }
    }, 1000);
});
