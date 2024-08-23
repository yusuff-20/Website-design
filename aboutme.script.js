// JavaScript kodu - aboutme_script.js

// "Hakkımda" başlığına tıklama olayını dinle
document.querySelector('.info-box h2').addEventListener('click', function() {
    // Başlığı yukarı kaydır ve metni görünür hale getir
    const infoBox = this.parentElement;
    const paragraph = infoBox.querySelector('p');
    
    // Başlığı yukarı kaydır
    this.style.transform = 'translateY(-50px)';
    this.style.opacity = '0';
    
    // Metni görünür hale getir
    paragraph.style.opacity = '1';
});

document.getElementById('hakkimda-title').addEventListener('click', function() {
    const hakkimdaBox = document.getElementById('hakkimda-box');
    hakkimdaBox.classList.toggle('active'); // Tıklanınca active sınıfı eklenip çıkarılacak
});