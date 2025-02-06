document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function() {
    let birthYear = 2010;  // Tahun lahirmu
    let birthMonth = 2;    // Februari
    let birthDay = 14;     // Tanggal 14

    let today = new Date(); // Ambil tanggal saat ini
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1; // getMonth() dimulai dari 0 (Jan = 0, Feb = 1)
    let currentDay = today.getDate();

    let age = currentYear - birthYear;

    // Jika ulang tahun belum terjadi tahun ini, kurangi 1 tahun
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    document.getElementById("age").textContent = age; // Masukkan umur ke HTML
});
