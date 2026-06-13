document.addEventListener("DOMContentLoaded", () => {
    // Data 9 halaman lengkap
    const pages = [
        {
            title: "Untuk Sayangku Tercinta",
            content:
                "Hallo sayangku,<br><br>Aku membuat ini bukan karena aku pandai merangkai kata-kata, tetapi karena ada begitu banyak hal yang ingin aku sampaikan kepadamu dari dalam hati. Aku tahu kejadian tadi malam mungkin membuat perasaanmu berubah. Mungkin kamu kecewa, sedih, marah, atau bahkan lelah menghadapi sikapku.<br><br>Aku mengerti jika sekarang kamu merasa berbeda. Aku mengerti jika ada luka yang muncul karena apa yang aku lakukan. Dan sebelum aku mengatakan apa pun, hal pertama yang ingin aku katakan adalah:<br><br><strong>Aku minta maaf.</strong><br>Maaf karena telah membuatmu merasakan hal yang seharusnya tidak perlu kamu rasakan."
        },
        {
            title: "Tentang Kecewa yang Aku Sebabkan",
            content:
                "Sayang,<br><br>Aku terus memikirkan kejadian tadi malam. Aku sadar bahwa kamu sudah berusaha begitu banyak. Kamu bahkan memilih untuk tidak ikut camping bersama mami kamu karena tidak ingin aku merasa sendirian.<br><br>Saat aku mengingat itu, hatiku terasa sangat bersalah.<br>Kamu memikirkan perasaanku. Kamu berusaha ada untukku. Kamu mengutamakanku.<br><br>Namun saat kamu melakukan semua itu, justru aku yang membuatmu merasa sendirian.<br>Aku tahu betapa menyakitkannya ketika seseorang yang kita sayangi tidak memberikan perhatian yang kita harapkan. Aku tahu betapa kecewanya kamu ketika menunggu, berharap, dan ingin menghabiskan waktu bersama, tetapi yang kamu dapatkan justru perasaan diabaikan.<br><br>Dan untuk semua itu, aku benar-benar meminta maaf."
        },
        {
            title: "Aku Tidak Punya Alasan",
            content:
                "Aku membuatmu ini tidak untuk mencari pembenaran.<br>Aku tidak ingin membuat alasan agar kesalahanku terlihat lebih kecil.<br>Karena sejujurnya, apa pun alasannya, kenyataannya tetap sama.<br><br>Aku telah membuatmu kecewa.<br>Aku telah membuatmu merasa tidak diprioritaskan.<br>Aku telah membuat seseorang yang sangat berarti bagiku merasakan kesedihan yang seharusnya tidak perlu ada.<br>Dan aku sadar, terkadang luka bukan datang dari kebencian, tetapi dari orang yang kita cintai namun tidak cukup berhati-hati menjaga perasaan kita.<br>Aku menyesal karena telah menjadi penyebab luka itu."
        },
        {
            title: "Tentang Dirimu",
            content:
                "Aku ingin kamu tahu satu hal.<br>Aku sangat menghargai semua hal yang telah kamu lakukan untukku.<br>Mungkin ada banyak hal yang tidak selalu aku ungkapkan, tetapi aku melihat semuanya.<br>Aku melihat perhatianmu.<br>Aku melihat usaha-usahamu.<br>Aku melihat caramu selalu mencoba mengerti aku.<br>Aku melihat bagaimana kamu tetap bertahan bahkan ketika aku tidak selalu menjadi orang yang pantas mendapatkan kesabaranmu.<br>Dan semakin aku memikirkan semuanya, semakin aku sadar bahwa aku beruntung memiliki seseorang seperti kamu.<br>Karena tidak semua orang mau bertahan, peduli, dan memberikan perhatian sebesar yang kamu berikan."
        },
        {
            title: "Penyesalanku",
            content:
                'Jika aku bisa mengulang waktu tadi malam, aku ingin memperbaiki semuanya.<br>Aku ingin hadir untukmu.<br>Aku ingin mendengarkanmu.<br>Aku ingin membuatmu merasa dihargai.<br>Aku ingin memastikan bahwa kamu tidak perlu tidur dengan perasaan kecewa karena ulahku.<br><br>Sayangnya waktu tidak bisa diputar kembali.<br>Yang bisa aku lakukan sekarang hanyalah mengakui kesalahanku dan meminta maaf dengan setulus-tulusnya.<br>Aku tahu permintaan maaf tidak bisa langsung menghapus rasa kecewa yang ada di hatimu.<br>Aku tahu kata "maaf" mungkin tidak cukup untuk memperbaiki semuanya.<br>Tapi percayalah, setiap kata yang aku tulis di sini berasal dari penyesalan yang benar-benar aku rasakan.'
        },
        {
            title: "Jika Kamu Masih Marah",
            content:
                "Sayang,<br>Jika kamu masih marah, aku mengerti.<br>Jika kamu masih kecewa, aku mengerti.<br>Jika kamu membutuhkan waktu, aku juga mengerti.<br>Aku tidak akan memaksamu untuk langsung memaafkanku.<br>Perasaanmu berhak dihargai.<br>Kamu berhak merasakan apa yang kamu rasakan.<br>Aku tidak ingin memintamu melupakan semuanya begitu saja.<br>Aku hanya berharap kamu tahu bahwa aku menyadari kesalahanku dan aku benar-benar menyesal atas apa yang terjadi."
        },
        {
            title: "Yang Aku Rasakan",
            content:
                "Aku sering berpikir bahwa mencintai seseorang berarti membuatnya bahagia.<br>Tetapi tadi malam aku justru melakukan kebalikannya.<br>Aku mencintaimu, tetapi aku melukaimu.<br>Aku menyayangimu, tetapi aku membuatmu kecewa.<br>Dan itu adalah kenyataan yang paling membuatku sedih.<br>Karena orang terakhir yang aku sakiti adalah kamu.<br>Orang terakhir yang aku buat menangis adalah kamu.<br>Orang terakhir yang aku buat merasa sendirian adalah kamu.<br>Namun justru aku yang melakukannya.<br>Dan untuk itu, aku benar-benar meminta maaf."
        },
        {
            title: "Harapanku",
            content:
                "Aku tidak meminta agar semuanya langsung kembali seperti semula.<br>Aku tidak meminta agar kamu langsung melupakan rasa kecewamu.<br>Aku hanya berharap suatu saat nanti kamu bisa melihat bahwa aku sungguh-sungguh menyesali kesalahanku.<br>Aku ingin belajar menjadi seseorang yang lebih baik untukmu.<br>Lebih peka terhadap perasaanmu.<br>Lebih menghargai waktumu.<br>Lebih menjaga hatimu.<br>Karena kamu pantas mendapatkan itu."
        },
        {
            title: "Penutup",
            content:
                "Terima kasih karena selama ini sudah begitu baik kepadaku.<br>Terima kasih karena sudah memberikan perhatian yang begitu besar.<br>Terima kasih karena sudah menganggapku dengan cara yang begitu tulus.<br><br>Dan sekali lagi...<br><strong>Maafkan aku, sayang.</strong><br>Maaf karena telah membuatmu kecewa.<br>Maaf karena telah membuatmu merasa sendirian.<br>Maaf karena tidak menjaga perasaanmu sebaik yang seharusnya.<br><br>Apa pun yang kamu rasakan saat ini, aku menerimanya.<br>Tetapi satu hal yang tidak akan berubah adalah bahwa aku tetap menyayangimu, menghargaimu, dan menyesali kesalahan yang telah aku lakukan.<br><br>Dengan penuh penyesalan dan kasih sayang,<br>Aku yang selalu mencintaimu. ❤️"
        }
    ];

    // DOM elements
    const loadingScreen = document.getElementById("loading-screen");
    const appContainer = document.getElementById("appContainer");
    const coverScreen = document.getElementById("coverScreen");
    const flipbookScreen = document.getElementById("flipbookScreen");
    const openBtn = document.getElementById("openLetterBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const restartBtn = document.getElementById("restartBtn");
    const currentPageSpan = document.getElementById("currentPageNum");
    const totalPagesSpan = document.getElementById("totalPagesNum");
    const progressFill = document.getElementById("progressFill");
    const pageTitleEl = document.getElementById("pageTitle");
    const pageContentEl = document.getElementById("pageContent");
    const musicToggle = document.getElementById("musicToggleBtn");
    const bgMusic = document.getElementById("bg-music");

    let currentPage = 0;
    const totalPages = pages.length;
    totalPagesSpan.innerText = totalPages;
    let musicPlaying = false;

    function updatePageUI() {
        const card = document.querySelector(".page-card");
        if (card) {
            card.classList.remove("fade-animation");
            void card.offsetWidth;
            card.classList.add("fade-animation");
        }
        const page = pages[currentPage];
        pageTitleEl.innerHTML = page.title;
        pageContentEl.innerHTML = page.content;
        currentPageSpan.innerText = currentPage + 1;
        const percent = ((currentPage + 1) / totalPages) * 100;
        progressFill.style.width = percent + "%";

        window.scrollTo({ top: 0, behavior: "smooth" });

        // Tombol khusus di halaman terakhir
        if (currentPage === totalPages - 1) {
            let apologyBtn = document.getElementById("specialApologyBtn");
            if (!apologyBtn) {
                const extraDiv = document.querySelector(".extra-buttons");
                const newBtn = document.createElement("button");
                newBtn.id = "specialApologyBtn";
                newBtn.innerText = "Aku Minta Maaf ❤️";
                newBtn.classList.add("extra-btn");
                newBtn.style.marginLeft = "8px";
                newBtn.style.background = "#ffcfdf";
                newBtn.onclick = () => {
                    alert("Maafkan aku sayang, aku sangat menyayangimu ❤️✨");
                    triggerConfetti();
                };
                extraDiv.appendChild(newBtn);
            }
        } else {
            const existBtn = document.getElementById("specialApologyBtn");
            if (existBtn) existBtn.remove();
        }
    }

    function triggerConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetto = document.createElement("div");
            confetto.style.position = "fixed";
            confetto.style.width = Math.random() * 8 + 4 + "px";
            confetto.style.height = Math.random() * 8 + 4 + "px";
            confetto.style.backgroundColor = `hsl(${
                Math.random() * 60 + 180
            }, 70%, 65%)`;
            confetto.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
            confetto.style.left = Math.random() * 100 + "%";
            confetto.style.top = "-20px";
            confetto.style.pointerEvents = "none";
            confetto.style.zIndex = "9999";
            confetto.style.opacity = "0.8";
            document.body.appendChild(confetto);
            const animation = confetto.animate(
                [
                    { transform: "translateY(0px) rotate(0deg)", opacity: 1 },
                    {
                        transform: `translateY(${
                            window.innerHeight + 100
                        }px) rotate(${Math.random() * 360}deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 1500 + Math.random() * 1000,
                    easing: "cubic-bezier(0.2, 0.9, 0.4, 1)"
                }
            );
            animation.onfinish = () => confetto.remove();
        }
    }

    function nextPage() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updatePageUI();
        } else {
            triggerConfetti();
        }
    }

    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            updatePageUI();
        }
    }

    function restartLetter() {
        currentPage = 0;
        updatePageUI();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function openLetter() {
        coverScreen.style.display = "none";
        flipbookScreen.style.display = "flex";
        currentPage = 0;
        updatePageUI();
        generateFloatingElements();
    }

    function generateFloatingElements() {
        const heartsContainer = document.getElementById(
            "floatingHeartsContainer"
        );
        const bubblesContainer = document.getElementById(
            "floatingBubblesContainer"
        );
        heartsContainer.innerHTML = "";
        bubblesContainer.innerHTML = "";
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.classList.add("float-heart");
            heart.style.left = Math.random() * 100 + "%";
            heart.style.animationDuration = 7 + Math.random() * 8 + "s";
            heart.style.fontSize = 18 + Math.random() * 24 + "px";
            heart.style.opacity = 0.4 + Math.random() * 0.5;
            heartsContainer.appendChild(heart);
        }
        for (let i = 0; i < 18; i++) {
            const bubble = document.createElement("div");
            bubble.innerHTML = "💧";
            bubble.classList.add("float-bubble");
            bubble.style.left = Math.random() * 100 + "%";
            bubble.style.animationDuration = 9 + Math.random() * 12 + "s";
            bubble.style.fontSize = 12 + Math.random() * 18 + "px";
            bubble.style.opacity = 0.4;
            bubblesContainer.appendChild(bubble);
        }
    }

    musicToggle.addEventListener("click", () => {
        if (!musicPlaying) {
            bgMusic
                .play()
                .catch(e =>
                    console.log("Auto-play restricted, user click needed")
                );
            musicPlaying = true;
            musicToggle.innerHTML = "⏸ Pause Musik";
        } else {
            bgMusic.pause();
            musicPlaying = false;
            musicToggle.innerHTML = "🎵 Play Musik";
        }
    });

    openBtn.addEventListener("click", openLetter);
    prevBtn.addEventListener("click", prevPage);
    nextBtn.addEventListener("click", nextPage);
    restartBtn.addEventListener("click", restartLetter);

    setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
            appContainer.style.display = "block";
            generateFloatingElements();
            const titleElem = document.querySelector(".cover-title");
            if (titleElem) {
                const originalText = titleElem.innerText;
                titleElem.innerText = "";
                let i = 0;
                function typeWriter() {
                    if (i < originalText.length) {
                        titleElem.innerText += originalText.charAt(i);
                        i++;
                        setTimeout(typeWriter, 70);
                    }
                }
                typeWriter();
            }
        }, 500);
    }, 1200);

    setInterval(() => {
        const sparkDiv = document.createElement("div");
        sparkDiv.style.position = "fixed";
        sparkDiv.style.width = "4px";
        sparkDiv.style.height = "4px";
        sparkDiv.style.background = "radial-gradient(circle, #fff, #a0d0ff)";
        sparkDiv.style.borderRadius = "50%";
        sparkDiv.style.left = Math.random() * 100 + "%";
        sparkDiv.style.top = Math.random() * 100 + "%";
        sparkDiv.style.pointerEvents = "none";
        sparkDiv.style.zIndex = "99";
        sparkDiv.style.opacity = "0.9";
        document.body.appendChild(sparkDiv);
        setTimeout(() => sparkDiv.remove(), 600);
    }, 700);
});
