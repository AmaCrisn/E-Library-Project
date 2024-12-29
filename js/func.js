// TO STORE BOOKS DATA
let books = [
    {
        "id": 1,
        "cover": "img/book/media crime.png",
        "title": "Media and Crime - Key Approaches to Criminology",
        "writer": "Yvonne Jewkes",
        "publisher": "SAGE Publications",
        "category": "Abstrak",
        "year": "2004",
        "post": "8 Februari 2024",
        "description": "Media and Crime oleh Yvonne Jewkes meneliti hubungan rumit antara penggambaran media dan persepsi publik tentang kejahatan. Melalui lensa kritis, Jewkes mengeksplorasi bagaimana berbagai bentuk media - dari laporan berita hingga hiburan - membentuk pemahaman kita tentang kejahatan, penjahat, dan peradilan pidana. Dia menggali dampak sensasionalisme, stereotip, dan framing pada sikap dan kebijakan masyarakat. Berdasarkan penelitian ekstensif, Jewkes menantang asumsi umum dan menawarkan perspektif bernuansa tentang peran media dalam membangun dan mempengaruhi persepsi kejahatan dalam masyarakat kontemporer. Analisisnya pada akhirnya mengundang pembaca untuk mempertimbangkan kembali kompleksitas representasi media dan implikasinya terhadap wacana publik dan praktik peradilan pidana.",
        "pdf": "pdf/(2004) Yvonne Jewkes- Media and Crime_Key Approaches to Criminology.pdf",
    },
    {
        "id": 2,
        "cover": "img/book/forensik sains.png",
        "title": "Introduction to Forensic Sciences (Second Edition)",
        "writer": "William G. Eckert",
        "publisher": "CRC Press",
        "category": "Abstrak",
        "year": "1997",
        "post": "6 Februari 2024",
        "description": "Introduction to Forensic Sciences adalah sebuah panduan komprehensif yang memperkenalkan pembaca pada dunia ilmu forensik. Buku ini mengulas prinsip-prinsip dasar dan metodologi yang penting dalam investigasi forensik, dari berbagai disiplin ilmu seperti biologi forensik, kimia forensik, antropologi forensik, hingga forensik digital. Pembahasan meliputi teknik-teknik pengumpulan, pelestarian, analisis, dan interpretasi bukti, dengan penekanan pada keakuratan ilmiah dan kepatuhan terhadap standar hukum. Buku ini juga mengulas peran ilmuwan forensik dalam penyelidikan kriminal dan proses hukum, serta menyoroti sifat interdisipliner dari pekerjaan forensik. Dengan studi kasus dan contoh praktis, pembaca diberi pemahaman mendalam tentang bagaimana ilmu forensik berkontribusi dalam memecahkan kejahatan dan menghadirkan keadilan. Introduction to Forensic Sciences tidak hanya menjadi sumber daya berharga bagi mahasiswa dan profesional di bidang ini, tetapi juga menginspirasi apresiasi yang lebih dalam terhadap perpaduan ilmu pengetahuan dan penegakan hukum.",
        "pdf": "pdf/WG Eckert - Introduction to Forensic Sciences 2nd ed.pdf",
    },
    {
        "id": 3,
        "cover": "img/book/cyber sec.png",
        "title": "Cyber Criminology - Exploring Internet Crimes and Criminal Behavior",
        "writer": " K. Jaishankar",
        "publisher": "CRC Press",
        "category": "Abstrak",
        "year": "2011",
        "post": "4 Februari 2024",
        "description": "Cyber Criminology: Exploring Internet Crimes and Criminal Behavior adalah sebuah kajian mendalam yang mengupas fenomena kejahatan di dunia maya dengan cermat dan terperinci. Buku ini membahas berbagai aspek yang berkaitan dengan kejahatan internet, termasuk profil pelaku, motif, teknik investigasi, serta dampak sosial dan ekonomi dari kejahatan tersebut. Penulisnya mengeksplorasi jenis-jenis kejahatan seperti penipuan online, pencurian identitas, pornografi anak, cyberbullying, dan serangan cyber seperti malware dan phishing. Mereka juga mempertimbangkan faktor-faktor yang mendorong perilaku kriminal di ruang digital, termasuk psikologis, sosial, dan teknologis. Buku ini tidak hanya menguraikan tren dan statistik terbaru dalam kejahatan internet, tetapi juga mengulas respons hukum dan teknologi yang diterapkan untuk memerangi kejahatan tersebut. Dengan demikian, Cyber Criminology tidak hanya menjadi bacaan penting bagi akademisi dan peneliti di bidang kejahatan komputer, tetapi juga membuka wawasan bagi pembaca umum tentang tantangan dan kompleksitas dalam melawan kejahatan di era digital ini.",
        "pdf": "pdf/Cyber Criminology - Exploring Internet Crimes and Criminal Behavior.pdf",
    },
    {
        "id": 4,
        "cover": "img/book/1000 nature.png",
        "title": "1000 Words Nature - Build Nature Vocabulary and Literacy Skills",
        "writer": "Jules Pottle",
        "publisher": "DK Penguin Random House",
        "category": "Edukasi",
        "year": "2022",
        "post": "2 Februari 2024",
        "description": "1000 Words Nature Build Nature Vocabulary and Literacy Skills adalah sebuah panduan yang memperkenalkan kosakata alam kepada pembaca, terutama anak-anak. Buku ini bertujuan untuk memperluas pemahaman tentang alam melalui seribu kata-kata yang penting dalam konteks lingkungan dan keanekaragaman hayati. Setiap halaman buku ini menghadirkan kata-kata baru yang terkait dengan flora, fauna, geologi, cuaca, dan ekosistem lainnya. Penjelasan yang jelas dan ilustrasi yang menarik memungkinkan pembaca untuk belajar dengan cara yang menyenangkan dan interaktif. Selain itu, buku ini juga mengajak pembaca untuk meningkatkan keterampilan literasi mereka dengan mengeksplorasi tema-tema alam secara lebih mendalam. Dengan membaca buku ini, diharapkan pembaca, terutama anak-anak, dapat mengembangkan keterampilan berbahasa mereka sambil semakin menghargai keindahan dan pentingnya menjaga lingkungan alamiah kita. Sinopsis ini menunjukkan bahwa 1000 Words Nature Build Nature Vocabulary and Literacy Skills adalah buku yang tidak hanya edukatif tetapi juga menginspirasi rasa kekaguman terhadap alam semesta ini.",
        "pdf": "pdf/1000 Words Nature Build Nature Vocabulary and Literacy Skills (Jules Pottle) (Z-Library).pdf",
    },
    {
        "id": 5,
        "cover": "img/book/1000 science.png",
        "title": "1000 Words Science - Build Knowledge, Vocabulary, and Literacy Skills",
        "writer": "Jules Pottle",
        "publisher": "DK Penguin Random House",
        "category": "Edukasi",
        "year": "2021",
        "post": "1 Februari 2024",
        "description": "1000 Words Science - Build Knowledge, Vocabulary, and Literacy Skills adalah panduan yang menyajikan seribu kata kunci dalam ilmu pengetahuan untuk membantu pembaca memperluas pengetahuan mereka, membangun kosakata, dan meningkatkan keterampilan literasi. Buku ini dirancang untuk semua kalangan, dari anak-anak hingga orang dewasa, yang tertarik untuk memahami dunia ilmu pengetahuan dengan cara yang mendalam dan menyenangkan. Setiap halaman buku ini didedikasikan untuk memperkenalkan konsep-konsep ilmiah yang penting, mulai dari fisika, kimia, biologi, astronomi, hingga teknologi modern. Penjelasan yang jelas disertai dengan ilustrasi yang menarik membantu membuka wawasan pembaca tentang berbagai topik ilmiah yang kompleks namun relevan dalam kehidupan sehari-hari. Melalui pendekatan yang sistematis dan mudah dipahami, pembaca diajak untuk menjelajahi dan memahami berbagai konsep ilmiah yang mendasar, yang tidak hanya berguna untuk meningkatkan pengetahuan mereka tetapi juga untuk mengembangkan keterampilan berbahasa dan literasi. Buku ini memberikan landasan yang kuat bagi pembaca untuk terlibat lebih dalam dalam diskusi tentang sains dan teknologi, serta untuk menginspirasi minat mereka terhadap bidang ilmu pengetahuan yang luas dan beragam. Sinopsis ini menggambarkan bahwa 1000 Words Science - Build Knowledge, Vocabulary, and Literacy Skills adalah sumber daya yang berharga bagi siapa saja yang ingin mengeksplorasi dan memperdalam pemahaman mereka tentang dunia ilmu pengetahuan secara menyeluruh dan terstruktur.",
        "pdf": "pdf/1000 Words Science (Jules Pottle) (Z-Library).pdf",
    },
    {
        "id": 6,
        "cover": "img/book/rpl.png",
        "title": "Software Engineering - A Practitioner's Approach (Ninth Edition)",
        "writer": " Roger S. Pressman, Ph.D., Bruce R. Maxim, Ph.D.",
        "publisher": "McGraw Hill",
        "category": "Edukasi",
        "year": "2020",
        "post": "27 Januari 2024",
        "description": "Software Engineering: A Practitioner's Approach adalah panduan komprehensif yang mengeksplorasi berbagai aspek penting dalam pengembangan perangkat lunak. Buku ini ditujukan untuk praktisi, mahasiswa, dan siapa pun yang tertarik memahami proses, metode, dan prinsip-prinsip dalam rekayasa perangkat lunak. Setiap bab dalam buku ini menggali topik mulai dari pengumpulan kebutuhan, perancangan sistem, pengujian, manajemen proyek, hingga pemeliharaan perangkat lunak. Roger S. Pressman menggunakan pendekatan yang praktis dan berbasis kasus untuk menjelaskan konsep-konsep tersebut, menyediakan studi kasus dan contoh nyata untuk memberikan pemahaman yang lebih dalam. Buku ini tidak hanya fokus pada aspek teknis dari rekayasa perangkat lunak, tetapi juga membahas masalah etika, manajemen risiko, dan tantangan organisasional yang seringkali terjadi dalam pengembangan perangkat lunak di dunia nyata. Dengan demikian, pembaca tidak hanya belajar tentang teknik-teknik terbaru dalam pengembangan perangkat lunak, tetapi juga diberikan wawasan tentang bagaimana menerapkan prinsip-prinsip ini dalam lingkungan kerja yang kompleks.",
        "pdf": "pdf/rpl.pdf",
    },
    {
        "id": 7,
        "cover": "img/book/sisfor.png",
        "title": "Management Information Systems - Managing the Digital Firm (Seventeenth Edition)",
        "writer": "Kenneth C. Laudon, Jane P. Laudon",
        "publisher": "Pearson",
        "category": "Edukasi",
        "year": "2022",
        "post": "24 Januari 2024",
        "description": "Buku Management Information Systems - Managing the Digital Firm edisi ketujuh belas merupakan karya komprehensif yang menyelami konsep dan aplikasi sistem informasi manajemen dalam konteks perusahaan digital modern. Ditulis oleh Kenneth C. Laudon dan Jane P. Laudon, buku ini membahas bagaimana teknologi informasi digunakan untuk mengelola organisasi secara efektif dan efisien di era digital. Edisi terbaru ini mencakup topik-topik penting seperti analisis data besar, kecerdasan buatan, keamanan siber, dan transformasi digital, serta memberikan studi kasus nyata dan contoh praktis untuk membantu pembaca memahami penerapan teori dalam praktik bisnis sehari-hari. Buku ini ideal bagi mahasiswa, profesional, dan siapa saja yang ingin memahami peran strategis teknologi informasi dalam dunia bisnis kontemporer.",
        "pdf": "pdf/sisfor.pdf",
    },
    {
        "id": 8,
        "cover": "img/book/cek.png",
        "title": "The Grand Design - Stephen Hawking And Leonard Mlodinow",
        "writer": "Stephen Hawking, Leonard Mlodinow",
        "publisher": "Bantam Books",
        "category": "Abstrak",
        "year": "2010",
        "post": "22 Januari 2024",
        "description": "Buku The Grand Design karya Stephen Hawking dan Leonard Mlodinow adalah eksplorasi mendalam tentang asal-usul alam semesta dan hukum-hukum yang mengatur eksistensi kita. Buku ini menguraikan perkembangan teori fisika dari masa lalu hingga saat ini, termasuk konsep-konsep revolusioner seperti teori M dan multiverse. Hawking dan Mlodinow berpendapat bahwa alam semesta tidak memerlukan pencipta ilahi dan dapat dijelaskan sepenuhnya melalui hukum-hukum sains. Dengan gaya penulisan yang mudah dipahami namun tetap mendalam, buku ini membawa pembaca dalam perjalanan intelektual yang menantang untuk memahami misteri terbesar dari alam semesta, sambil mempertanyakan dan mengupas konsep-konsep filosofis dan ilmiah tentang realitas.",
        "pdf": "pdf/(2008) Stephen Hawking dan Leonard Mlodinow - The Grand Design.pdf",
    },
    {
        "id": 9,
        "cover": "img/book/End-of-Life_Audiobook_(1).jpg",
        "title": "End of Life - A Guide for Humanists and Non-Religious People in BC",
        "writer": " Sophie Burk and Ian Bushfield",
        "publisher": "BC Humanist Association",
        "category": "Abstrak",
        "year": "2023",
        "post": "21 Januari 2024",
        "description": "Buku End of Life: A Guide for Humanists and Non-Religious People in BC adalah panduan praktis dan informatif yang ditujukan bagi mereka yang tidak menganut agama atau memiliki pandangan humanis dalam menghadapi akhir kehidupan. Ditulis khusus untuk masyarakat di British Columbia, buku ini menawarkan wawasan dan saran mengenai berbagai aspek akhir kehidupan, termasuk perencanaan lanjutan, hak-hak pasien, pilihan perawatan paliatif, serta proses hukum terkait kematian. Buku ini juga menyentuh aspek emosional dan psikologis yang sering dihadapi individu dan keluarga, sambil memberikan panduan untuk merayakan kehidupan dan warisan tanpa pendekatan agama. Dengan pendekatan yang penuh empati dan berbasis fakta, buku ini menjadi sumber daya berharga bagi mereka yang mencari pemahaman dan dukungan dalam menghadapi fase terakhir kehidupan dengan cara yang sesuai dengan nilai-nilai humanis dan non-religius.",
        "pdf": "pdf/end-of-life-a-guide-for-humanists-and-non-religious-people-in-bc5x8.pdf",
    },
    {
        "id": 10,
        "cover": "img/book/Aljabar linear.png",
        "title": "Dasar - Dasar Aljabar Linear",
        "writer": "Nuril Lutvi Azizah, S.Si., M.Si., Novia Ariyanti, S.Si., M.Pd.",
        "publisher": "UMSIDA Press",
        "category": "Edukasi",
        "year": "2020",
        "post": "20 Januari 2024",
        "description": "Buku Dasar-Dasar Aljabar Linear adalah panduan fundamental yang menyajikan konsep-konsep utama dalam aljabar linear dengan cara yang jelas dan sistematis. Ditulis untuk mahasiswa matematika, fisika, teknik, dan bidang terkait, buku ini mencakup topik-topik seperti vektor, matriks, determinan, ruang vektor, dan transformasi linear. Setiap konsep dijelaskan dengan teori yang mendalam, disertai contoh-contoh konkret dan soal latihan untuk memperkuat pemahaman. Buku ini juga menekankan aplikasi praktis dari aljabar linear dalam berbagai disiplin ilmu, sehingga pembaca tidak hanya memahami teori tetapi juga mampu mengaplikasikannya dalam masalah nyata. Dengan pendekatan yang terstruktur dan didaktis, Dasar-Dasar Aljabar Linear adalah sumber daya penting bagi siapa saja yang ingin membangun fondasi kuat dalam aljabar linear.",
        "pdf": "pdf/ebook allin.pdf",
    },
    {
        "id": 11,
        "cover": "img/book/bedah kebidanan.png",
        "title": "Ilmu Bedah Kebidanan",
        "writer": "Prof. dr. ABDUL BARI SAIFUDDIN, DSOG, MPH, dT. TRIJATMO RACHIMHADHI, DSOG",
        "publisher": "Yayasan Bina Pustaka Sarwono Prawirohardjo",
        "category": "Edukasi",
        "year": "2000",
        "post": "18 Januari 2024",
        "description": "Buku Ilmu Bedah Kebidanan adalah karya komprehensif yang mengulas secara mendalam prinsip-prinsip, teknik, dan praktik yang terkait dengan bedah kebidanan. Buku ini dirancang khusus untuk para praktisi medis, mahasiswa kedokteran, dan tenaga kesehatan yang tertarik dalam bidang bedah obstetri dan ginekologi. Mulai dari penanganan kelainan obstetri hingga prosedur-prosedur bedah ginekologi, buku ini menguraikan langkah-langkah operatif dengan jelas, dilengkapi dengan ilustrasi dan gambar yang membantu memahami secara visual. Selain itu, buku ini juga membahas aspek manajemen pascaoperasi dan perawatan pasien bedah kebidanan dengan komprehensif. Dengan pendekatan yang sistematis dan terstruktur, Ilmu Bedah Kebidanan menjadi sumber rujukan penting bagi praktisi dan mahasiswa yang ingin menguasai aspek klinis dan teknis dalam bidang bedah obstetri dan ginekologi.",
        "pdf": "pdf/ILMU BEDAH KEBIDANAN c (1).pdf",
    },
    {
        "id": 12,
        "cover": "img/book/critical care.png",
        "title": "Emergency Critical Care Pocket Guide",
        "writer": "Paula Derr, Mike McEvoy, Jon Tardiff",
        "publisher": "Informed",
        "category": "Edukasi",
        "year": "2014",
        "post": "13 Januari 2024",
        "description": "Buku Emergency Critical Care Pocket Guide adalah panduan praktis yang menyajikan informasi kritis dan penting dalam penanganan kasus darurat di unit perawatan intensif. Dirancang dalam format saku yang mudah dibawa dan diakses, buku ini mencakup protokol penanganan sejumlah kondisi medis mendesak seperti gagal jantung, serangan jantung, syok, trauma, dan gangguan neurologis akut. Dengan poin-poin kunci yang disusun secara sistematis dan tabel-tabel ringkas yang merangkum tindakan dan obat-obatan yang diperlukan, buku ini menjadi alat yang sangat berguna bagi para tenaga medis dan perawat yang bekerja di lingkungan kritis di mana waktu dan tindakan cepat sangat penting.",
        "pdf": "pdf/Emergency   Critical Care Pocket Guide.pdf",
    },
    {
        "id": 13,
        "cover": "img/book/criminal justis.png",
        "title": "Essentials of Criminal Justice",
        "writer": "Larry J. Siegel, Joseph J. Senna",
        "publisher": "Thomson Wadsworth",
        "category": "Edukasi",
        "year": "2007",
        "post": "11 Januari 2024",
        "description": "Buku Essentials of Criminal Justice adalah panduan komprehensif yang menggali konsep-konsep kunci dalam sistem keadilan pidana secara mendalam. Dengan pendekatan yang menyeluruh, buku ini membahas berbagai aspek yang terkait dengan sistem keadilan pidana, mulai dari sejarah dan filosofi hukum pidana hingga proses penegakan hukum, peradilan pidana, dan isu-isu kontemporer seperti kejahatan siber dan terorisme. Selain itu, buku ini juga membahas aspek-etika dalam penegakan hukum dan konsekuensi sosial dari sistem keadilan pidana. Dengan penjelasan yang jelas dan disertai dengan studi kasus serta pertanyaan refleksi, buku ini menjadi sumber rujukan yang penting bagi mahasiswa, profesional, dan siapa pun yang tertarik dengan bidang keadilan pidana.",
        "pdf": "pdf/Essentials of Criminal Justice by Larry J. Siegel, Joseph J. Senna (z-lib.org).pdf",
    },
    {
        "id": 14,
        "cover": "img/book/med psycology.png",
        "title": "Textbook of Medical Physiology (Eleventh Edition)",
        "writer": "Arthur C. Guyton, M.D.†, John E. Hall, Ph.D.",
        "publisher": "Elsevier Saunders",
        "category": "Edukasi",
        "year": "2006",
        "post": "8 Januari 2024",
        "description": "Buku Textbook of Medical Physiology edisi kesebelas merupakan referensi yang luas dan mendalam mengenai fisiologi tubuh manusia yang disusun secara komprehensif. Dalam buku ini, pembaca diajak untuk memahami berbagai proses fisiologis dalam tubuh manusia, mulai dari tingkat seluler hingga sistem-sistem organ yang kompleks. Edisi terbaru ini mencakup perkembangan terbaru dalam ilmu fisiologi medis, termasuk pemahaman yang lebih dalam tentang regulasi hormonal, mekanisme kerja sistem saraf, serta respons tubuh terhadap berbagai kondisi patologis. Dengan ilustrasi yang jelas dan penjelasan yang mudah dipahami, buku ini menjadi sumber rujukan yang sangat berharga bagi mahasiswa kedokteran, dokter, dan para profesional medis lainnya yang ingin mendalami pengetahuan fisiologi tubuh manusia.",
        "pdf": "pdf/Guyton & Hall Textbook Of Medical Physiology 11th Ed.pdf",
    },
    {
        "id": 15,
        "cover": "img/book/anatomy.png",
        "title": "Pocket Atlas of Human Anatomy",
        "writer": "Heinz Feneis, Wolfgang Dauber",
        "publisher": "Thieme",
        "category": "Edukasi",
        "year": "2000",
        "post": "5 Januari 2024",
        "description": "Buku Pocket Atlas of Human Anatomy adalah panduan visual yang kompak dan informatif tentang anatomi tubuh manusia. Dengan ilustrasi yang detail dan jelas, buku ini menghadirkan gambar-gambar yang memperlihatkan struktur anatomi tubuh manusia mulai dari tulang, otot, organ dalam, hingga sistem saraf dan pembuluh darah. Setiap gambar disertai dengan penjelasan singkat yang memudahkan pembaca untuk memahami nama dan fungsi dari setiap bagian tubuh. Dengan format yang mudah dibawa dan diakses, buku ini sangat cocok digunakan oleh mahasiswa kedokteran, para profesional medis, serta siapa saja yang ingin mempelajari anatomi tubuh manusia secara mendalam dan praktis.",
        "pdf": "pdf/Pocket Atlas of Human Anatomy (Thieme 2000).pdf",
    },
    {
        "id": 16,
        "cover": "img/book/forensik.png",
        "title": "Color Atlas of Forensic Pathology",
        "writer": "Jay Dix",
        "publisher": "CRC Press",
        "category": "Edukasi",
        "year": "2000",
        "post": "2 Januari 2024",
        "description": "Buku Color Atlas of Forensic Pathology adalah panduan yang kaya akan gambar-gambar berwarna yang menggambarkan secara rinci proses pemeriksaan forensik pada tubuh manusia. Dari penanganan mayat hingga teknik analisis forensik yang lebih dalam, buku ini memberikan pandangan mendalam tentang bagaimana para ahli forensik memeriksa bukti-bukti fisik yang terkait dengan kasus kriminal dan medis. Setiap gambar disertai dengan penjelasan yang jelas dan ilmiah, menjadikan buku ini sebagai alat referensi yang sangat berguna bagi para mahasiswa kedokteran forensik, dokter patologi, dan para profesional medis yang terlibat dalam penegakan hukum.",
        "pdf": "pdf/Color Atlas of Forensic Pathology (CRC Press 2000).pdf",
    }
]

// Set header automatically
$("header").append(`
        <div class="title">
            <img src="img/logo.png" alt="">
            <h1>
                E-Library
            </h1>
        </div>

        <div class="navigator">
            <form action="" class="search" id="formSearch">
                <input type="search" placeholder="Cari..." id="search" value="">
                <button onclick=""><img src="img/icon/search (24).png" alt="" id="btnSearch"></button>
            </form>
            <ul>
                <li><a href="Beranda.html" class="beranda">Beranda</a></li>
                <li><a href="Jelajahi-Buku.html" class="jelajah">Jelajahi Buku</a></li>
            </ul>
        </div>

        <div class="dropdown">
            <a href="#" class="dropbtn" aria-haspopup="true" aria-expanded="false" role="button">
                <img src="img/user.png" alt="" class="profile">
            </a>
            <div class="dropdown-content" role="menu">
                <div class="userProfile">
                    <div class="account">
                        <img src="img/pp user.png" alt="">
                    </div>
                    <hr>
                    <div class="submenu">
                        <a href="logsign.html" aria-haspopup="true" aria-expanded="false" role="menuitem" class="out">Keluar</a>
                    </div>
                    <a href="#" role="menuitem"></a>
                </div>
            </div
        </div>
`);

// ADD FOOTER INNER HTML
$("footer").append(`
    <hr>
    <div class="footerSection">
        <div class="footerContent">
            <div class="logoFooter" >
                <img src="img/logo.png" alt="">
                <h2>E-Library</h2>
            </div>
            <div class="social">
                <h2>Kontak Kami</h2>
                <ul>
                    <li><i class="emailIcon"></i>
                        <strong>Email</strong> 
                        <dd>seseorang@gmail.com</dd>
                    </li>
                    <li><i class="phoneIcon"></i>
                        <strong>Telepon</strong>
                        <dd>+6285891427232</dd>
                    </li>
                    <li><i class="addressIcon"></i>
                        <strong>Alamat</strong>
                        <dd>Jl. Batu Bulat No.58, Jakarta 13520</dd>
                    </li>
                </ul>
            </div>  
        </div>
        <div class="qoutes">
            <h4>"The only true wisdom is in knowing you know nothing."</h4>
            <h4>-Socrates-</h4>
        </div> 
    </div>
    <div style="background-color: #74512D; color: white;  display: flex; justify-content: center; align-items: center;">
        <p style="margin-top: 30px; margin-bottom: 30px; font-weight: 500;">© 2024. All Rights Reserved Perpustakaan Kita </p>
    </div>
`);

const searchInput = document.getElementById("search");
const searchForm = document.getElementById("formSearch");
const listBook = document.querySelector(".bookList");
const detailBook = document.querySelector(".bookDetail");
const cardContainer = document.querySelector(".container");
const bookResult = document.querySelector(".bookResult");

//Setting the submit search form function
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (searchInput.value != "") {
        location.href = `search.html?search=${searchInput.value}`
    };
});

// TO CHECK IF ITS HOME PAGE
if (cardContainer) {
    // ARRAY FOR RANDOM NUMBERS
    let numbers = new Array(5);
    let randBook;
    cardContainer.innerHTML = '';

    // SET THE NAVIGATOR BACKGROUND COLOR TO ACTIVE
    $(".beranda").addClass("active");

    for (let index = 0; index < 6; index++) {
        let random = Math.floor((Math.random() * 12) + 1);
        if (numbers.find(function findNumb(a) { return a == random })) {
            index--
        } else {
            numbers[index] = random;
            // GET BOOK ID BY RANDOM NUMBER
            randBook = books.filter(value => value.id == random)[0];
            $(".container").append(`
                <div class="card">
                    <img src="${randBook.cover}" alt="Kover Buku">
                    <div class="content" data-id="${randBook.id}">
                        <h3>${randBook.title}</h3>
                        <p>${randBook.description}</p>
                        <button class="readMore">Baca &#10095;</button>
                    </div>
                </div>
            `);
        }
    }

    // SET FUNCTION IN THE READ MORE BUTTON
    $(document).ready(function () {
        $(".card").click(function (e) {
            // GET USER CLICK POSITION
            let posClick = e.target;
            // CHECK IF CLICK POSITION IS A BUTTON
            if (posClick.classList.contains("readMore")) {
                let bookID = posClick.parentElement.dataset.id;
                location.href = `Detail-Buku.html?id=${bookID}`;
            }
        })
    })
}
// TO CHECK IF ITS BUKU BARU PAGE
if (listBook) {
    // REMOVING THE CONTAINER TEMPLATE
    listBook.innerHTML = '';

    // SET THE NAVIGATOR BACKGROUND COLOR TO ACTIVE
    $(".jelajah").addClass("active");

    // ADD BOOK IN THE BOOKLIST CLASS
    if (books.length > 0) {
        books.forEach(book => {
            $(".bookList").append(`
            <a href="Detail-Buku.html?id=${book.id}">
                <article class="book">
                    <div class="cover">
                        <img src="${book.cover}" alt="">
                    </div>
                    <div>
                        <div class="bHeader">
                            <p><strong>Tanggal Unggah: ${book.post}</strong></p>
                            <h1>${book.title}</h1>
                        </div>
                        <div class="bDetail">
                            <ul>
                                <li><i class="categoryIcon"></i>
                                    ${book.category}
                                </li>
                                <li><i class="writerIcon"></i>
                                    ${book.writer}
                                </li>
                                <li><i class="yearIcon"></i>
                                    ${book.year}
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </a>
            `);
        });
    }
}
// TO CHECK IF ITS DETAIL BOOK PAGE
if (detailBook) {
    // GET THE BOOK ID FROM LINK
    let bookID = new URLSearchParams(window.location.search).get('id');
    let thisBook = books.filter(value => value.id == bookID)[0];
    if (!thisBook) {
        window.location.href = "/";
    };

    // SET THE TAB NAME
    $("title").text(`Buku ${thisBook.title} | E-Library`);

    // INSERTING THE VALUE BY BOOK ID
    $(".cover img").attr("src", thisBook.cover);
    $(".detail h2").text(function (i, origText) {
        return origText + ` ${thisBook.post}`
    });
    $(".detail h1").text(thisBook.title);
    $(".judul td").text(thisBook.title);
    $(".kategori td").text(thisBook.category);
    $(".penulis td").text(thisBook.writer);
    $(".penerbit td").text(thisBook.publisher);
    $(".tahunTerbit td").text(thisBook.year);
    $(".description p").text(thisBook.description);

    // REDIRECTING USER TO BOOK PDF FILE
    $("button").click(function (e) {
        location.href = thisBook.pdf;
    });

    // INSERTING RANDOM BOOK RECOMMENDATION
    let recList = document.querySelector(".recList");

    // REMOVING THE RECOMMENDATION TEMPLATE CONTAINERS
    recList.innerHTML = '';

    // ARRAY FOR RANDOM NUMBERS
    let numbers = new Array(5);
    let randBook;
    for (let index = 0; index < 5; index++) {
        let random = Math.floor((Math.random() * books.length) + 1);
        // CHECK IF NUMBER IS ALREADY IN THE ARRAY/SAME AS THE VIEWED BOOK THEN GET ANOTHER RANDOM NUMBER 
        if (numbers.find(function findNumb(a) { return a == random }) | random == bookID) {
            index--
        } else {
            // INSERTING NUMBERS IN ARRAY
            numbers[index] = random;
            // GET VALUE WITH THE RANDOM NUMBER
            randBook = books.filter(value => value.id == random)[0];
            // ADD BOOK
            $(".recList").append(`
                <a href="Detail-Buku.html?id=${randBook.id}">
                    <article class="recBooks">
                        <div class="recCover"><img src="${randBook.cover}" alt=""></div>
                        <div class="bookTitle">
                            <p>${randBook.post}</p>
                            <h2>${randBook.title}</h2>
                        </div>
                    </article>
                </a>
            `)
        }
    }
}
//TO CHECK IF ITS SEARCH PAGE
if (bookResult) {
    let result = new URLSearchParams(window.location.search).get('search');

    // SET THE SEARCH INPUT VALUE AND GET THE BOOK TITLE/VALUE FROM BOOKS ARRAY
    $("#search").val(result);
    $(".headSect h3").text(function (i, origText) {
        return origText + ` "${result}"`;
    });

    // Set the tab name
    $("title").text(`Cari Buku ${result} | E-Library`);

    // INSERTING THE BOOK BY SEARCH VALUE
    bookResult.innerHTML = '';
    books.forEach(book => {

        // LOWER CASE THE SEARCH VALUE AND THE TITLE 
        let titleBook = book.title.toLowerCase();
        let isBook = titleBook.includes(result.toLowerCase());

        // CHECK IF SEARCH VALUE IS EXIST
        if (isBook) {
            $(".bookResult").append(`
            <a href="Detail-Buku.html?id=${book.id}" style="text-decoration: none;">
                <article class="book">
                    <div class="cover">
                        <img src="${book.cover}" alt="">
                    </div>
                    <div>
                        <div class="bHeader">
                            <p><strong>Tanggal Unggah: ${book.post}</strong></p>
                            <h1>${book.title}</h1>
                        </div>
                        <div class="bDetail">
                            <ul>
                                <li><i class="categoryIcon"></i>
                                    ${book.category}
                                </li>
                                <li><i class="writerIcon"></i>
                                    ${book.writer}
                                </li>
                                <li><i class="yearIcon"></i>
                                    ${book.year}
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </a>
            `);
        }
    })

    // IF NO BOOKS FOUND
    if (bookResult.innerHTML == '') {
        $(".bookContent").append(`
            <div>
                <img src="img/icon/not-found-alt(64).png" alt="" style="display: block; margin: auto;">
                <h1 style="text-align: center;">Buku "${result}" Tidak Ditemukan.</h1>
            </div>
        `);
    }
}