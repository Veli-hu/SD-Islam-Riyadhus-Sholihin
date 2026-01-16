// Smooth scroll O(1)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault(); document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark mode toggle with localStorage
const toggle = document.getElementById('dark-mode-toggle');
console.log('Toggle button:', toggle);
const currentTheme = localStorage.getItem('theme');
console.log('Current theme:', currentTheme);
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    toggle.textContent = '☀️';
} else {
    toggle.textContent = '🌙';
}

toggle.addEventListener('click', () => {
    console.log('Toggle clicked');
    document.body.classList.toggle('dark');
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    console.log('New theme:', theme);
});

// Slideshow for teachers
const teachers = [
    { img: 'images/ramadhani.jpeg', name: 'Ramadhani Bintang Pratama', desc: 'Mengajar PPKn, PJOK, Seni, P5 - Wali Kelas 1' },
    { img: 'images/bu_intan.jpg', name: 'Bu Intan', desc: 'Mengajar Bahasa Indonesia, Inggris, Jawa' },
    { img: 'images/pak_adnan.jpg', name: 'Pak Adnan', desc: 'Mengajar PAI dan MTK' }
];

let currentTeacher = 0;
const guruPhoto = document.getElementById('guru-photo');
const guruName = document.getElementById('guru-name');
const guruDesc = document.getElementById('guru-desc');

function changeTeacher() {
    currentTeacher = (currentTeacher + 1) % teachers.length;
    guruPhoto.src = teachers[currentTeacher].img;
    guruName.textContent = teachers[currentTeacher].name;
    guruDesc.textContent = teachers[currentTeacher].desc;
}

setInterval(changeTeacher, 5000);

// Slideshow for sekolah and kursus
const sekolahPhotos = [
    'images/Gambar Sekolah 2.jpeg',
    // Tambahkan foto sekolah lainnya di sini
];

const kursusPhotos = [
    'images/Kursus 2.jpeg',
    'images/Kursus 3.jpeg',
    // Tambahkan foto kursus lainnya di sini
];

let currentSekolah = 0;
let currentKursus = 0;
const sekolahPhoto = document.getElementById('sekolah-photo');
const kursusPhoto = document.getElementById('kursus-photo');

function changeSekolahPhoto() {
    if (sekolahPhotos.length > 1) {
        currentSekolah = (currentSekolah + 1) % sekolahPhotos.length;
        sekolahPhoto.src = sekolahPhotos[currentSekolah];
    }
}

function changeKursusPhoto() {
    if (kursusPhotos.length > 1) {
        currentKursus = (currentKursus + 1) % kursusPhotos.length;
        kursusPhoto.src = kursusPhotos[currentKursus];
    }
}

setInterval(changeSekolahPhoto, 5000);
setInterval(changeKursusPhoto, 5000);

// Modal for images
function openModal(src, alt, desc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = desc;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Auto-scroll to home on page load
window.addEventListener('load', () => {
    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    typeWriter();
});

// Typing effect for welcome text
const text = "Selamat Datang di SDI Riyadhus Sholihin";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.querySelector('.hero h1').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}