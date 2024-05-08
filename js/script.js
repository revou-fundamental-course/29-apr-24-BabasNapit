let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Ganti gambar setiap 2 detik
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});

// JavaScript
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Hindari pengiriman form secara otomatis

        // Lakukan validasi form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const favoritePlace = document.getElementById('favorite-place').value;

        if (name.trim() === '' || email.trim() === '' || favoritePlace === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Validasi email dengan regular expression
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Jika semua validasi berhasil, tampilkan notifikasi
        alert('Thank you for subscribing!');
        
        // Reset form
        form.reset();
    });
});
