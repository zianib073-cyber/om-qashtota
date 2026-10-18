// تاريخ مؤقت للعدّاد إلى أن يُحدَّد يوم الافتتاح الحقيقي.
const LAUNCH_AT = new Date("2026-11-15T10:00:00+01:00");

const CATEGORIES = [
    {
        id: "koshari",
        title: "قسم الكشري الحلو",
        en: "Koshari Sweet — Round Bowls",
        image: "images/koshari.jpg",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        blurb: "تجربة الكشري الحلو الفاخرة، طبقات من الإبداع واللذة",
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
        en: "Qashtouta Showcase",
        image: "images/qashtota.jpg",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        blurb: "كيك طري متشرب لبن 24 ساعة بكريمة بلجيكي فاخرة وإضافات على مزاجك",
        blurbFr: "Gâteau moelleux imbibé de lait 24h, nappé de crème belge premium et de vos toppings préférés",
        items: [
            { id: "q-family", image: "images/plates/q-family.jpg", name: "قشطوطة عائلية", en: "Qashtouta Family — 4 × Qashtouta", desc: "صينية عائلية فيها أربع قشطوطات. الكيك متشرب بالحليب 24 ساعة، والكريمة بلجيكية، والإضافات على كيفكم." },
            { id: "q-mangue-brulee", image: "images/plates/q-mangue-brulee.jpg", name: "قشطوطة بروليه مانجو", en: "Qashtouta Mangue Brulée", desc: "مكعبات مانجو ناضجة فوق الكريمة، وسطح سكر محروق على طريقة البروليه يتكسر تحت الملعقة." },
            { id: "q-malaki", image: "images/plates/q-malaki.jpg", name: "قشطوطة ملكي", en: "Qashtouta Malaki", desc: "التشكيلة الملكية: كريمة بلجيكية كثيفة وإضافات مختارة فوق الكيك الذهبي المتشرب بالحليب." },
            { id: "q-super", image: "images/plates/q-super.jpg", name: "قشطوطة سوبر ملكي", en: "Qashtouta Super Malaki", desc: "حجم أكبر وطبقات أغنى من الملكي: كيك طري، كريمة بلجيكية، وتقديم يملأ الطبق." },
            { id: "q-super-brulee", image: "images/plates/q-super-brulee.jpg", name: "قشطوطة سوبر ملكي بروليه", en: "Qashtouta Super Malaki Brulée", desc: "السوبر ملكي بسطح كراميل محروق، قشرة رقيقة فوق كريمة بلجيكية كثيفة." },
            { id: "q-mangue", image: "images/plates/q-mangue.jpg", name: "قشطوطة مانجا", en: "Qashtouta Mangue", desc: "مانجو طازجة مقطعة فوق كريمة بلجيكية وكيك متشرب بالحليب طول الليل." },
            { id: "q-oreo", image: "images/plates/q-oreo.jpg", name: "قشطوطة أوريو", en: "Qashtouta Oreo", desc: "قطع أوريو مقرمشة وكريمة بسكويت داكنة فوق القشطوطة." },
            { id: "q-four", image: "images/plates/q-four.jpg", name: "قشطوطة فور سيزون", en: "Qashtouta Four Season", desc: "أربع نكهات في طبق واحد: كل ربع بإضافته، من الفستق إلى الشوكولاتة والفاكهة." },
            { id: "q-pistachio", image: "images/plates/q-pistachio.jpg", name: "قشطوطة بيستاشيو", en: "Qashtouta Pistachio", desc: "فستق مجروش وصوص فستق أخضر يغمر الكريمة البلجيكية." },
            { id: "q-lotus", image: "images/plates/q-lotus.jpg", name: "قشطوطة لوتس", en: "Qashtouta Lotus", desc: "فتات بسكويت اللوتس وصوص الكراميل فوق كيك طري وكريمة كثيفة." },
            { id: "q-nuts", image: "images/plates/q-nuts.jpg", name: "قشطوطة مكسرات", en: "Qashtouta Mokassarat", desc: "مكسرات محمصة: فستق، لوز وجوز، فوق الكريمة البلجيكية." },
            { id: "q-kinder", image: "images/plates/q-kinder.jpg", name: "قشطوطة كيندر", en: "Qashtouta Kinder", desc: "كريمة شوكولاتة كيندر ناعمة تسيل على الكيك المتشرب بالحليب." },
            { id: "q-banana", image: "images/plates/q-banana.jpg", name: "قشطوطة موز وكراميل", en: "Qashtouta Banane & Caramel", desc: "شرائح موز طري وكراميل دافئ يسيل على الكريمة البلجيكية." },
            { id: "q-fraise", image: "images/plates/q-fraise.jpg", name: "قشطوطة فراولة وشوكولاتة", en: "Qashtouta Chocolat & Fraise", desc: "فراولة طرية وشوكولاتة بلجيكية داكنة فوق الكيك والكريمة." },
            { id: "q-choco", image: "images/plates/q-choco.jpg", name: "قشطوطة شوكولاتة", en: "Qashtouta Chocolate", desc: "شوكولاتة بلجيكية كثيفة تسيل على جوانب الكيك الذهبي." },
            { id: "q-sada", image: "images/plates/q-sada.jpg", name: "قشطوطة سادة", en: "Qashtouta Sada", desc: "الأصل بلا زيادة: كيك متشرب بالحليب 24 ساعة وكريمة بلجيكية صافية." }
        ]
    },
    {
        id: "icecream",
        title: "قسم المثلجات والگلاص الفاخر",
        en: "Premium Ice Cream — Round Tubs",
        image: "images/icecream.jpg",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        blurb: "آيس كريم فاخر بطعم مميز وبقوام كريمي غني",
        blurbFr: "Ice Cream Premium",
        blurbLang: "en",
        items: [
            { id: "i-pistachio", image: "images/plates/i-pistachio.jpg", name: "گلاص فستق بصوص غني", en: "Pistachio Ice Cream", desc: "سكوب فستق كثيف وصوص فستق غني، داخل العلبة الدائرية بالشعار." },
            { id: "i-lotus", image: "images/plates/i-lotus.jpg", name: "گلاص لوتس", en: "Lotus Ice Cream", desc: "گلاص لوتس كريمي مع فتات البسكويت وصوص الكراميل في العلبة الدائرية." },
            { id: "i-mango", image: "images/plates/i-mango.jpg", name: "گلاص مانجو مع صوص غني", en: "Mango Ice Cream", desc: "سكوبات مانجو مدوّرة، صوص مانجو ذهبي يسيل عليها، ومكعبات مانجو طازجة. في العلبة الدائرية." },
            { id: "i-cheesecake", image: "images/plates/i-cheesecake.jpg", name: "گلاص تشيزكيك", en: "Cheesecake Ice Cream", desc: "قوام تشيزكيك كريمي بارد، مقدّم في نفس العلبة الدائرية." },
            { id: "i-caramel", image: "images/plates/i-caramel.jpg", name: "گلاص حليب وكراميل", en: "Milk & Caramel Ice Cream", desc: "گلاص حليب ناعم وكراميل دافئ يسيل فوقه، في العلبة الدائرية." }
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
            { id: "ck-kunafa", name: "كيك كنافة بصوص الفستق", en: "Kunafa Pistachio Cake", desc: "كيك كنافة مع صوص فستق يغمر كل قطعة." },
            { id: "ck-seb-choco", name: "تري سيباستيان شوكولاتة", en: "San Sebastian Chocolate", desc: "سان سيباستيان محروق السطح بنكهة الشوكولاتة." },
            { id: "ck-seb-pist", name: "تري سيباستيان فستق", en: "San Sebastian Pistachio", desc: "سان سيباستيان كريمي بقلب فستق." },
            { id: "ck-seb-lotus", name: "تري سيباستيان لوتس", en: "San Sebastian Lotus", desc: "سان سيباستيان بصوص اللوتس الكراميل." }
        ]
    }
];

function pad(n) {
    return String(n).padStart(2, "0");
}

function tickCountdown() {
    const now = Date.now();
    let diff = Math.max(0, LAUNCH_AT.getTime() - now);
    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const mins = Math.floor(diff / 60000);
    diff -= mins * 60000;
    const secs = Math.floor(diff / 1000);
    document.getElementById("cdDays").textContent = pad(days);
    document.getElementById("cdHours").textContent = pad(hours);
    document.getElementById("cdMins").textContent = pad(mins);
    document.getElementById("cdSecs").textContent = pad(secs);
}

function plateSrc(cat, item) {
    const src = (item.image || cat.image).replace(/\.jpe?g$/i, ".webp");
    return item.image ? src + "?v=35" : src;
}

function renderMenu() {
    const root = document.getElementById("menuGrid");
    root.innerHTML = CATEGORIES.map((cat) => `
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
                    <article class="card${shape}">
                        <div class="plate">
                            <img src="${plateSrc(cat, item)}" alt="${item.name} — ${item.en}" width="600" height="600" loading="lazy" decoding="async">
                        </div>
                        <span class="mark">قريباً — تخفيض 20%<span lang="en" dir="ltr">Coming Soon • 20% OFF</span></span>
                        <h4>${item.name}</h4>
                        <p class="en" lang="en">${item.en}</p>
                        <p class="desc">${item.desc}</p>
                    </article>
                `;
                }).join("")}
            </div>
        </section>
    `).join("");
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

renderMenu();
initHeroSlider();
tickCountdown();
setInterval(tickCountdown, 1000);
