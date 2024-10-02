// JavaScript kodu - aboutme_script.js

document.querySelectorAll('.info-box h2').forEach(function(title) {
    title.addEventListener('click', function() {
        const infoBox = this.parentElement;
        const currentlyActive = document.querySelector('.info-box.active');

        if (currentlyActive && currentlyActive !== infoBox) {
            currentlyActive.classList.remove('active');
            currentlyActive.querySelector('h2').style.display = 'block';
        }

        if (!infoBox.classList.contains('active')) {
            infoBox.classList.add('active');
            setTimeout(() => {
                this.style.display = 'none';
            }, 500);
        } else {
            infoBox.classList.remove('active');
            this.style.display = 'block';
        }
    });
});
