// Data Artikel
const articles = [
    { id: 1, category: "study", title: "Belajar Efektif", image: "a.jpg", content: "Tips dan trik untuk belajar efektif di rumah." },
    { id: 2, category: "iq", title: "Tes IQ Online", image: "img2.jpg", content: "Pelajari bagaimana meningkatkan IQ Anda dengan latihan." },
    { id: 3, category: "elementary", title: "Dasar Matematika", image: "img3.jpg", content: "Materi dasar matematika untuk anak-anak." },
    { id: 4, category: "psychological", title: "Psikologi Anak", image: "img4.jpg", content: "Memahami perkembangan psikologis anak secara menyeluruh." },
    { id: 5, category: "junior-school", title: "Materi SMP", image: "img5.jpg", content: "Persiapkan diri Anda untuk ujian nasional SMP." },
    { id: 6, category: "high-school", title: "Belajar SMA", image: "img6.jpg", content: "Materi lengkap untuk siswa SMA yang berprestasi." },
    { id: 7, category: "study", title: "Belajar Mandiri", image: "img7.jpg", content: "Bagaimana belajar mandiri di rumah secara efektif." },
];

// Elemen DOM
const articlesContainer = document.getElementById("articles-container");
const categoryButtons = document.querySelectorAll(".category-button");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Fungsi Menampilkan Artikel
function displayArticles(filteredArticles) {
    if (filteredArticles.length === 0) {
        articlesContainer.innerHTML = `
            <p style="color: #ffd700; text-align: center;">Tidak ada artikel yang ditemukan.</p>
        `;
        return;
    }

    articlesContainer.innerHTML = filteredArticles.map(article => `
        <div class="article-card">
            <img src="${article.image}" alt="${article.title}">
            <div class="article-card-content">
                <h3>${article.title}</h3>
                <p>${article.content}</p>
                <a href="#" class="read-more">Baca Selengkapnya</a>
            </div>
        </div>
    `).join("");
}

// Fungsi Filter Berdasarkan Kategori
function filterByCategory(category) {
    const filteredArticles = category === "all"
        ? articles
        : articles.filter(article => article.category === category);

    displayArticles(filteredArticles);
}

// Fungsi Pencarian Artikel
function searchArticles(query) {
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query)
    );

    displayArticles(filteredArticles);
}

// Event untuk Navigasi Kategori
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        filterByCategory(category);
    });
});

// Event untuk Pencarian
searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    searchArticles(query);
});

// Tampilkan Semua Artikel Saat Awal
filterByCategory("all");

// Event untuk Pencarian
searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();
    searchArticles(query);
});

// Tambahkan Event Listener untuk Tombol Enter
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const query = searchInput.value.toLowerCase().trim();
        searchArticles(query);
    }
});

document.querySelectorAll(".faq-item h3").forEach((faqTitle) => {
    faqTitle.addEventListener("click", () => {
        const parent = faqTitle.parentElement;
        const content = parent.querySelector("p");

        if (parent.classList.contains("open")) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        parent.classList.toggle("open");
    });
});

document.getElementById("to-register").addEventListener("click", () => {
    document.getElementById("login-form").classList.remove("active");
    document.getElementById("register-form").classList.add("active");
});

document.getElementById("to-login").addEventListener("click", () => {
    document.getElementById("register-form").classList.remove("active");
    document.getElementById("login-form").classList.add("active");
});

// Login Form Submission
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (result.success) {
        alert("Login berhasil!");
        // Redirect or other logic
    } else {
        alert("Login gagal: " + result.message);
    }
});

// Register Form Submission
document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();
    if (result.success) {
        alert("Pendaftaran berhasil!");
    } else {
        alert("Pendaftaran gagal: " + result.message);
    }
});

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Opini yang sudah diatur sebelumnya
const opiniList = [
    "Menurut AI, pendekatan ini bisa memperbaiki efisiensi belajar.",
    "Opini lain: Metode ini sangat cocok untuk pemula.",
    "AI berpendapat bahwa artikel ini relevan untuk topik modern.",
    "Sistem AI menyarankan fokus pada implementasi praktis.",
    "Pandangan AI: Kombinasi teori dan praktik adalah kunci."
];

// Fungsi untuk menangani tombol
document.getElementById("opini-btn").addEventListener("click", () => {
    const loading = document.getElementById("loading");
    const opiniText = document.getElementById("opini-text");

    // Tampilkan animasi loading
    loading.style.display = "block";
    opiniText.textContent = ""; // Kosongkan teks opini

    // Setelah 4 detik, tampilkan opini acak
    setTimeout(() => {
        loading.style.display = "none";
        const randomOpini = opiniList[Math.floor(Math.random() * opiniList.length)];
        opiniText.textContent = randomOpini;
    }, 4000); // 4 detik
});
