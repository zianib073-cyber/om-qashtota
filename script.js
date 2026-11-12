// صورة العلبة: حط item.image ملي توصل صورة الحلوى، وإلا كيبان تصوير القسم.
const CATEGORIES = [
    {
        id: "koshari",
        title: "قسم الكشري الحلو",
        en: "Koshari Sweet — Round Bowls",
        image: "images/koshari.jpg",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        blurb: "تجربة الكشري الحلو الفاخرة، طبقات من الإبداع واللذة في علبة دائرية بالشعار",
        blurbFr: "Expérience Koshari Sweet Premium",
        items: [
            { id: "k-mix", image: "images/plates/k-mix.jpg", name: "كشري مكس", en: "Koshari Mix", desc: "طبقات كشري حلو متداخلة: قشطة، مكسرات وصلصات، في علبة دائرية بالشعار." },
            { id: "k-pistachio", image: "images/plates/k-pistachio.jpg", name: "كشري فستق كريمي", en: "Koshari Pistachio Cream", desc: "شعيرية مقرمشة مع كريمة فستق كثيفة تغمر الطبقات." },
            { id: "k-mango", image: "images/plates/k-mango.jpg", name: "كشري مانجو", en: "Koshari Mango", desc: "مكعبات مانجو طازجة فوق طبقات الكشري الحلو والكريمة." },
            { id: "k-oreo", image: "images/plates/k-oreo.jpg", name: "كشري أوريو بالشوكولاتة", en: "Koshari Oreo & Chocolate", desc: "فتات أوريو وكريمة حليب، مع شوكولاتة بلجيكية تسيل على طبقات الكشري." },
            { id: "k-fraise", image: "images/plates/k-fraise.jpg", name: "كشري فراولة وشوكولاتة", en: "Koshari Fraise & Chocolat", desc: "فراولة طرية وشوكولاتة بلجيكية تسيل على طبقات الكشري." }
        ]
    },
    {
        id: "qashtota",
        title: "قسم القشطوطة",
        en: "Qashtouta",
        image: "images/qashtota.jpg",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        blurb: "كيك طري متشرب لبن 24 ساعة بكريمة بلجيكي فاخرة وإضافات على مزاجك",
        blurbFr: "Gâteau moelleux imbibé de lait 24h, nappé de crème belge premium et de vos toppings préférés",
        items: [
            { id: "q-sada", image: "images/plates/q-sada.jpg", name: "قشطوطة سادة", en: "Qashtouta Sada", desc: "الأصل بلا زيادة: كيك متشرب بالحليب 24 ساعة وكريمة بلجيكية صافية." },
            { id: "q-choco", image: "images/plates/q-choco.jpg", name: "قشطوطة شوكولاتة", en: "Qashtouta Chocolate", desc: "شوكولاتة بلجيكية كثيفة تسيل على جوانب الكيك الذهبي." },
            { id: "q-banana", image: "images/plates/q-banana.jpg", name: "قشطوطة موز وكراميل", en: "Banane & Caramels", desc: "شرائح موز طري وكراميل دافئ يسيل على الكريمة البلجيكية." },
            { id: "q-kinder", image: "images/plates/q-kinder.jpg", name: "قشطوطة كيندر", en: "Qashtouta Kinder", desc: "كريمة شوكولاتة كيندر ناعمة تسيل على الكيك المتشرب بالحليب." },
            { id: "q-lotus", image: "images/plates/q-lotus.jpg", name: "قشطوطة لوتس", en: "Qashtouta Lotus", desc: "فتات بسكويت اللوتس وصوص الكراميل فوق كيك طري وكريمة كثيفة." },
            { id: "q-oreo", image: "images/plates/q-oreo.jpg", name: "قشطوطة أوريو", en: "Qashtouta Oreo", desc: "قطع أوريو مقرمشة وكريمة بسكويت داكنة فوق القشطوطة." },
            { id: "q-pistachio", image: "images/plates/q-pistachio.jpg", name: "قشطوطة بيستاشيو", en: "Qashtouta Pistachio", desc: "فستق مجروش وصوص فستق أخضر يغمر الكريمة البلجيكية." },
            { id: "q-mangue", image: "images/plates/q-mangue.jpg", name: "قشطوطة مانجو", en: "Qashtouta Mangue", desc: "مانجو طازجة مقطعة فوق كريمة بلجيكية وكيك متشرب بالحليب طول الليل." },
            { id: "q-four", image: "images/plates/q-four.jpg", name: "قشطوطة فور سيزون", en: "Qashtouta Four Season", desc: "أربع نكهات في علبة واحدة: كل ربع بإضافته، من الفستق إلى الشوكولاتة والفاكهة." },
            { id: "q-malaki", image: "images/plates/q-malaki.jpg", name: "قشطوطة ملكي", en: "Qashtouta Malaki", desc: "التشكيلة الملكية: كريمة بلجيكية كثيفة وإضافات مختارة فوق الكيك الذهبي المتشرب بالحليب." },
            { id: "q-super-brulee", image: "images/plates/q-super-brulee.jpg", name: "قشطوطة سوبر ملكي بروليه", en: "Qashtouta Super Malaki Brulee", desc: "السوبر ملكي بسطح كراميل محروق، قشرة رقيقة فوق كريمة بلجيكية كثيفة، في علبة مستطيلة بالشعار." },
            { id: "q-family", image: "images/plates/q-family.jpg", name: "قشطوطة عائلية", en: "Family : 4 × Qashtouta", desc: "علبة عائلية فيها أربع قشطوطات من تشكيلة المتجر. الكيك متشرب بالحليب 24 ساعة، والكريمة بلجيكية، مقدّمة في علبة مستطيلة بالشعار." }
        ]
    },
    {
        id: "icecream",
        title: "قسم المثلجات والگلاص الفاخر",
        en: "Premium Ice Cream — Round Tubs",
        image: "images/icecream.jpg",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        blurb: "آيس كريم فاخر بطعم مميز وبقوام كريمي غني، في علبة دائرية بالشعار",
        blurbFr: "Ice Cream Premium",
        blurbLang: "en",
        items: [
            { id: "i-pistachio", image: "images/plates/i-pistachio.jpg", name: "گلاص فستق بصوص غني", en: "Pistachio Ice Cream", desc: "سكوب فستق كثيف وصوص فستق غني، داخل العلبة الدائرية بالشعار." },
            { id: "i-lotus", image: "images/plates/i-lotus.jpg", name: "گلاص لوتس", en: "Lotus Ice Cream", desc: "گلاص لوتس كريمي مع فتات البسكويت وصوص الكراميل في العلبة الدائرية." },
            { id: "i-mango", image: "images/plates/i-mango.jpg", name: "گلاص مانجو مع صوص غني", en: "Mango Ice Cream", desc: "سكوبات مانجو مدوّرة وصوص ذهبي، في العلبة الدائرية." },
            { id: "i-cheesecake", image: "images/plates/i-cheesecake.jpg", name: "گلاص تشيزكيك", en: "Cheesecake Ice Cream", desc: "قوام تشيزكيك كريمي بارد، مقدّم في نفس العلبة الدائرية." },
            { id: "i-caramel", image: "images/plates/i-caramel.jpg", name: "گلاص حليب وكراميل", en: "Milk & Caramel Ice Cream", desc: "گلاص حليب ناعم وكراميل دافئ، في العلبة الدائرية." }
        ]
    },
    {
        id: "conut",
        title: "قسم الكونوت العصري",
        en: "Conut Line",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        image: "images/conut.jpg",
        items: [
            { id: "c-one", image: "images/plates/c-one.jpg", name: "ذا ون", en: "The One — Caramel & Strawberry", desc: "كونوت أسطواني من عجين ملفوف مدخّن بسكر القرفة، مبطّن بكريمة كراميل مملح وشرائح فراولة طازجة." },
            { id: "c-pistachio", image: "images/plates/c-pistachio.jpg", name: "كونوت بكريمة الفستق", en: "Pistachio Cream Conut", desc: "كونوت أسطواني ذهبي بسكر القرفة، مبطّن بكريمة فستق غنية ومكسرات فستق محمصة." },
            { id: "c-triple", image: "images/plates/c-triple.jpg", name: "شوكولاتة ثلاثية وبراونيز", en: "Triple Chocolate & Brownies Conut", desc: "كونوت أسطواني بسكر القرفة، محشي سبريد شوكولاتة بلجيكية الداكنة ومكعبات براونيز." },
            { id: "c-lemon", image: "images/plates/c-lemon.jpg", name: "تشيزكيك ليمون بوسطن", en: "Lemon Boston Cheesecake Conut", desc: "كونوت أسطواني بسكر القرفة، مبطّن بحشوة تشيزكيك بوسطن وكيرد ليمون أصفر ناصع." }
        ]
    },
    {
        id: "cake",
        title: "قسم سان سيباستيان والكيك",
        en: "San Sebastian & Cakes",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        image: "images/cake.jpg",
        items: [
            { id: "ck-seb-choco", image: "images/plates/ck-seb-choco.jpg", name: "تري سيباستيان شوكولاتة", en: "San Sebastian Chocolate", desc: "سان سيباستيان محروق السطح بنكهة الشوكولاتة، مقدّم على طبق سيراميك فاخر." },
            { id: "ck-seb-pist", image: "images/plates/ck-seb-pist.jpg", name: "تري سيباستيان فستق", en: "San Sebastian Pistachio", desc: "سان سيباستيان كريمي بقلب فستق، مقدّم على طبق سيراميك فاخر." },
            { id: "ck-seb-lotus", image: "images/plates/ck-seb-lotus.jpg", name: "تري سيباستيان لوتس", en: "San Sebastian Lotus", desc: "سان سيباستيان بصوص اللوتس الكراميل، مقدّم على طبق سيراميك فاخر." }
        ]
    }
];

function packSrc(cat, item) {
    const src = (item.image || cat.image).replace(/\.jpe?g$/i, ".webp");
    const v = cat.id === "koshari" ? "73" : "70";
    return item.image ? src + "?v=" + v : src;
}

function renderMenu() {
    const blocks = CATEGORIES.filter((cat) => cat.id !== "qashtota");
    const markup = (list) => list.map((cat) => `
        <section class="cat-block" id="${cat.id}">
            <div class="cat-head">
                <h3>${cat.title}</h3>
                <span>${cat.en}</span>
                ${cat.coming ? `<p class="cat-soon">${cat.coming}</p>` : ""}
                ${cat.blurb ? `<p class="cat-blurb">${cat.blurb}<span lang="${cat.blurbLang || "fr"}">${cat.blurbFr}</span></p>` : ""}
            </div>
            <div class="grid${cat.id === "qashtota" ? " grid-pack" : ""}">
                ${cat.items.map((item) => {
                    const shape = cat.id === "qashtota" ? " card-pack" : (cat.id === "koshari" || cat.id === "icecream") ? " card-bowl" : "";
                    return `
                    <article class="card neon-border${shape}">
                        <div class="pack circular-img-container">
                            <img src="${packSrc(cat, item)}" alt="${item.name} — ${item.en}" width="${cat.id === "qashtota" ? "800" : "600"}" height="${cat.id === "qashtota" ? "600" : "600"}" loading="lazy" decoding="async">
                        </div>
                        <h4>${item.name}</h4>
                        <p class="en" lang="en">${item.en}</p>
                        <p class="desc">${item.desc}</p>
                        <div class="card-foot">
                            <span class="featured-badge">مميز وجديد ✨</span>
                            <span class="promo-chip">خصم 20% عند الافتتاح</span>
                        </div>
                    </article>
                `;
                }).join("")}
            </div>
        </section>
    `).join("");
    document.getElementById("menuGrid").innerHTML = markup(blocks.filter((cat) => cat.id === "koshari"));
    document.getElementById("menuRest").innerHTML = markup(blocks.filter((cat) => cat.id !== "koshari"));
}

function initHeroSlider() {
    const slides = [...document.querySelectorAll(".hero-slide")];
    const dotsBox = document.getElementById("heroDots");
    const caption = document.getElementById("heroCaption");
    if (!slides.length || !dotsBox || !caption) return;
    let index = 0;
    let timer;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    dotsBox.innerHTML = slides.map((_, n) =>
        `<button type="button" role="tab" aria-label="شريحة ${n + 1}" data-slide="${n}"></button>`
    ).join("");
    const dots = [...dotsBox.querySelectorAll("button")];

    function go(n) {
        index = (n + slides.length) % slides.length;
        slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
        dots.forEach((dot, i) => {
            if (i === index) dot.setAttribute("aria-current", "true");
            else dot.removeAttribute("aria-current");
        });
        caption.textContent = slides[index].dataset.caption || "";
        const img = slides[index].querySelector("img");
        if (img && !reduce) {
            img.style.animation = "none";
            void img.offsetWidth;
            img.style.animation = "";
        }
    }

    function play() {
        clearInterval(timer);
        if (reduce) return;
        timer = setInterval(() => go(index + 1), 6500);
    }

    document.getElementById("heroPrev").addEventListener("click", () => {
        go(index - 1);
        play();
    });
    document.getElementById("heroNext").addEventListener("click", () => {
        go(index + 1);
        play();
    });
    dotsBox.addEventListener("click", (event) => {
        const btn = event.target.closest("[data-slide]");
        if (!btn) return;
        go(Number(btn.dataset.slide));
        play();
    });
    go(0);
    play();
}

function initSoonPopup() {
    const overlay = document.getElementById("soonOverlay");
    const closeBtn = document.getElementById("soonClose");
    if (!overlay || !closeBtn) return;
    let lastFocus = null;

    function openSoon(event) {
        event.preventDefault();
        lastFocus = document.activeElement;
        overlay.hidden = false;
        overlay.classList.remove("is-open");
        void overlay.offsetWidth;
        overlay.classList.add("is-open");
        document.body.classList.add("soon-open");
        closeBtn.focus();
    }

    function closeSoon() {
        if (!overlay.classList.contains("is-open") && overlay.hidden) return;
        overlay.classList.remove("is-open");
        document.body.classList.remove("soon-open");
        window.setTimeout(() => {
            if (!overlay.classList.contains("is-open")) overlay.hidden = true;
        }, 320);
        if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    document.querySelectorAll(".js-soon").forEach((el) => {
        el.addEventListener("click", openSoon);
    });
    closeBtn.addEventListener("click", closeSoon);
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) closeSoon();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && overlay.classList.contains("is-open")) closeSoon();
    });
}

renderMenu();
initHeroSlider();
initSoonPopup();
