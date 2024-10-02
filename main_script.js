// Modal ve profil resmi seçimi
const modal = document.getElementById("myModal");
const img = document.getElementById("profilePic");
const modalImg = document.getElementById("img01");
const closeModal = document.querySelector(".close");

// Profil resmine tıklandığında modal'ı göster
img.addEventListener("click", () => {
    modal.style.display = "flex"; // Modalı göster ve merkezi hizalama
    modalImg.src = img.src; // Modal içeriğine resmi ekle
});

// Modal kapanışı
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// ESC tuşuna basıldığında modal'ı kapat
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
