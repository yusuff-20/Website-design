// JavaScript kodu - aboutme_script.js

// Tüm başlıklar için tıklama olayını dinle
document.querySelectorAll('.info-box h2').forEach(function(title) {
    title.addEventListener('click', function() {
        // Bağlı olduğu info-box'ı al
        const infoBox = this.parentElement;

        // active sınıfını ekleyip çıkar
        if (!infoBox.classList.contains('active')) {
            infoBox.classList.add('active');

            // Başlığı kaybetmek için animasyonu tetikle
            setTimeout(() => {
                this.style.display = 'none';
            }, 500); // CSS animasyon süresiyle eşleştirildi (0.5s)
        }
    });
});
