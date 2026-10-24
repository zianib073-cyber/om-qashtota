// تاريخ مؤقت للعدّاد إلى أن يُحدَّد يوم الافتتاح الحقيقي.
const LAUNCH_AT = new Date("2026-11-15T10:00:00+01:00");
const DISCOUNT_CODE = "QASHTOTA20";

// صورة الطبق: حط item.image ملي توصل صورة الحلوى، وإلا كيبان تصوير القسم.
const CATEGORIES = [
    {
        id: "koshari",
        title: "قسم الكشري الحلو",
        en: "Sahne / Tabake — Mixed Dessert Plate",
        image: "images/koshari.jpg",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        blurb: "صحن الحلويات المشكل الذي يضم جميع أنواع الحلويات المتوفرة في المتجر",
        blurbFr: "Expérience Koshari Sweet Premium",
        items: [
            { id: "k-mix", image: "images/plates/k-mix.jpg", name: "كشري مكس", en: "Koshari Mix", desc: "طبقات كشري حلو متداخلة: قشطة، مكسرات وصلصات، في صحن Sahne / Tabake." },
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
            { id: "q-sada", image: "images/plates/q-sada.jpg", name: "قشطوطة سادة", en: "Qashtouta Sada", price: 29, desc: "الأصل بلا زيادة: كيك متشرب بالحليب 24 ساعة وكريمة بلجيكية صافية." },
            { id: "q-choco", image: "images/plates/q-choco.jpg", name: "قشطوطة شوكولاتة", en: "Qashtouta Chocolate", price: 38, desc: "شوكولاتة بلجيكية كثيفة تسيل على جوانب الكيك الذهبي." },
            { id: "q-banana", image: "images/plates/q-banana.jpg", name: "قشطوطة موز وكراميل", en: "Qashtouta Banane & Caramel", price: 35, desc: "شرائح موز طري وكراميل دافئ يسيل على الكريمة البلجيكية." },
            { id: "q-kinder", image: "images/plates/q-kinder.jpg", name: "قشطوطة كيندر", en: "Qashtouta Kinder", price: 38, desc: "كريمة شوكولاتة كيندر ناعمة تسيل على الكيك المتشرب بالحليب." },
            { id: "q-lotus", image: "images/plates/q-lotus.jpg", name: "قشطوطة لوتس", en: "Qashtouta Lotus", price: 38, desc: "فتات بسكويت اللوتس وصوص الكراميل فوق كيك طري وكريمة كثيفة." },
            { id: "q-oreo", image: "images/plates/q-oreo.jpg", name: "قشطوطة أوريو", en: "Qashtouta Oreo", price: 38, desc: "قطع أوريو مقرمشة وكريمة بسكويت داكنة فوق القشطوطة." },
            { id: "q-pistachio", image: "images/plates/q-pistachio.jpg", name: "قشطوطة بيستاشيو", en: "Qashtouta Pistachio", price: 40, desc: "فستق مجروش وصوص فستق أخضر يغمر الكريمة البلجيكية." },
            { id: "q-mangue", image: "images/plates/q-mangue.jpg", name: "قشطوطة مانجا", en: "Qashtouta Mangue", price: 35, desc: "مانجو طازجة مقطعة فوق كريمة بلجيكية وكيك متشرب بالحليب طول الليل." },
            { id: "q-four", image: "images/plates/q-four.jpg", name: "قشطوطة فور سيزون", en: "Qashtouta Four Season", price: 45, desc: "أربع نكهات في طبق واحد: كل ربع بإضافته، من الفستق إلى الشوكولاتة والفاكهة." },
            { id: "q-malaki", image: "images/plates/q-malaki.jpg", name: "قشطوطة ملكي", en: "Qashtouta Malaki", price: 45, desc: "التشكيلة الملكية: كريمة بلجيكية كثيفة وإضافات مختارة فوق الكيك الذهبي المتشرب بالحليب." },
            { id: "q-super", image: "images/plates/q-super.jpg", name: "قشطوطة سوبر ملكي", en: "Qashtouta Super Malaki", price: 58, desc: "حجم أكبر وطبقات أغنى من الملكي: كيك طري، كريمة بلجيكية، وتقديم يملأ الطبق." },
            { id: "q-family", image: "images/plates/q-family.jpg", name: "قشطوطة عائلية", en: "Family : 4 × Qashtouta", price: 145, desc: "صحن مشكل فيه أربع قشطوطات من تشكيلة المتجر. الكيك متشرب بالحليب 24 ساعة، والكريمة بلجيكية، مقدّم في صحن Sahne / Tabake." }
        ]
    },
    {
        id: "icecream",
        title: "قسم المثلجات والگلاص الفاخر",
        en: "Sahne / Tabake — Ice Cream Plate",
        image: "images/icecream.jpg",
        coming: "📍 قريباً بفرع الدروة — تخفيض 20%",
        blurb: "آيس كريم فاخر بطعم مميز وبقوام كريمي غني",
        blurbFr: "Ice Cream Premium",
        blurbLang: "en",
        items: [
            { id: "i-pistachio", image: "images/plates/i-pistachio.jpg", name: "گلاص فستق بصوص غني", en: "Pistachio Ice Cream", desc: "سكوب فستق كثيف وصوص فستق غني، في صحن Sahne / Tabake." },
            { id: "i-lotus", image: "images/plates/i-lotus.jpg", name: "گلاص لوتس", en: "Lotus Ice Cream", desc: "گلاص لوتس كريمي مع فتات البسكويت وصوص الكراميل، في صحن Sahne / Tabake." },
            { id: "i-mango", image: "images/plates/i-mango.jpg", name: "گلاص مانجو مع صوص غني", en: "Mango Ice Cream", desc: "سكوبات مانجو مدوّرة وصوص ذهبي، في صحن Sahne / Tabake." },
            { id: "i-cheesecake", image: "images/plates/i-cheesecake.jpg", name: "گلاص تشيزكيك", en: "Cheesecake Ice Cream", desc: "قوام تشيزكيك كريمي بارد، في صحن Sahne / Tabake." },
            { id: "i-caramel", image: "images/plates/i-caramel.jpg", name: "گلاص حليب وكراميل", en: "Milk & Caramel Ice Cream", desc: "گلاص حليب ناعم وكراميل دافئ، في صحن Sahne / Tabake." }
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

const cart = new Map();

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
    return item.image ? src + "?v=50" : src;
}

function findItem(id) {
    for (const cat of CATEGORIES) {
        const item = cat.items.find((it) => it.id === id);
        if (item) return { ...item, image: plateSrc(cat, item) };
    }
    return null;
}

function normalizePhone(value) {
    let digits = String(value).replace(/[\s.-]/g, "");
    if (digits.startsWith("+212")) digits = "0" + digits.slice(4);
    else if (digits.startsWith("00212")) digits = "0" + digits.slice(5);
    else if (digits.startsWith("212")) digits = "0" + digits.slice(3);
    return digits;
}

function isMoroccanPhone(value) {
    return /^0[5-7]\d{8}$/.test(normalizePhone(value));
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
                    const qty = cart.get(item.id)?.qty || 0;
                    const shape = cat.id === "qashtota" ? " card-pack" : (cat.id === "koshari" || cat.id === "icecream") ? " card-bowl" : "";
                    return `
                    <article class="card neon-border${shape}">
                        <div class="plate circular-img-container">
                            <img src="${plateSrc(cat, item)}" alt="${item.name} — ${item.en}" width="${cat.id === "qashtota" ? "800" : "600"}" height="${cat.id === "qashtota" ? "600" : "600"}" loading="lazy" decoding="async">
                            ${item.price ? `<span class="price-badge">${item.price} <small>DH</small></span>` : ""}
                        </div>
                        <h4>${item.name}</h4>
                        <p class="en" lang="en">${item.en}</p>
                        <p class="desc">${item.desc}</p>
                        <div class="card-foot">
                            ${item.price ? `<span class="featured-badge">${item.price} DH</span>` : `<span class="featured-badge">مميز وجديد ✨</span>`}
                            <button class="btn btn-reserve" type="button" data-add="${item.id}">${qty ? `في الحجز ×${qty}` : "قريباً — احجز تخفيض 20%<small lang=\"en\">Coming soon · 20% OFF</small>"}</button>
                        </div>
                    </article>
                `;
                }).join("")}
            </div>
        </section>
    `).join("");
}

function cartList() {
    return [...cart.values()];
}

function renderCart() {
    const count = cartList().reduce((sum, line) => sum + line.qty, 0);
    document.getElementById("cartCount").textContent = count;
    const box = document.getElementById("cartItems");
    if (!cart.size) {
        box.innerHTML = "<p>السلّة فارغة.</p>";
    } else {
        box.innerHTML = cartList().map((line) => `
            <div class="cart-line">
                <div>
                    <strong>${line.name}</strong>
                    <div class="qty">
                        <button type="button" data-dec="${line.id}" aria-label="إنقاص ${line.name}">−</button>
                        <span>${line.qty}</span>
                        <button type="button" data-inc="${line.id}" aria-label="زيادة ${line.name}">+</button>
                    </div>
                </div>
                <button class="link-btn" type="button" data-remove="${line.id}">حذف</button>
            </div>
        `).join("");
    }
    const summary = document.getElementById("pickedSummary");
    summary.classList.remove("is-warn");
    summary.textContent = cart.size
        ? "اختيارك: " + cartList().map((line) => `${line.name} ×${line.qty}`).join(" · ")
        : "السلّة فارغة — زد حلويات من المنيو.";
}

function addItem(id) {
    const item = findItem(id);
    if (!item) return;
    const current = cart.get(id);
    cart.set(id, { ...item, qty: current ? current.qty + 1 : 1 });
    renderCart();
    renderMenu();
    hideFormError();
}

function changeQty(id, delta) {
    const current = cart.get(id);
    if (!current) return;
    const qty = current.qty + delta;
    if (qty < 1) cart.delete(id);
    else cart.set(id, { ...current, qty });
    renderCart();
    renderMenu();
}

function removeItem(id) {
    cart.delete(id);
    renderCart();
    renderMenu();
}

function saveLead(lead) {
    const key = "omQashtotaLeads";
    try {
        const prev = JSON.parse(localStorage.getItem(key) || "[]");
        prev.push(lead);
        localStorage.setItem(key, JSON.stringify(prev));
    } catch (error) {
        console.warn("lead storage skipped", error);
    }
}

function showFormError(message) {
    const box = document.getElementById("formError");
    box.hidden = false;
    box.textContent = message;
}

function hideFormError() {
    const box = document.getElementById("formError");
    box.hidden = true;
    box.textContent = "";
}

document.getElementById("menuGrid").addEventListener("click", (event) => {
    const id = event.target.dataset.add;
    if (id) addItem(id);
});

document.getElementById("cartItems").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.remove) removeItem(button.dataset.remove);
    if (button.dataset.inc) changeQty(button.dataset.inc, 1);
    if (button.dataset.dec) changeQty(button.dataset.dec, -1);
});

document.getElementById("openCart").addEventListener("click", () => {
    document.getElementById("cartDrawer").hidden = false;
});
document.getElementById("closeCart").addEventListener("click", () => {
    document.getElementById("cartDrawer").hidden = true;
});
document.getElementById("cartDrawer").addEventListener("click", (event) => {
    if (event.target.id === "cartDrawer") event.currentTarget.hidden = true;
});
document.getElementById("goReserve").addEventListener("click", () => {
    document.getElementById("cartDrawer").hidden = true;
});

const CONFIRM_COPY = "🎉 تم حجز كود الخصم (QASHTOTA20) بنجاح! يسعدنا استقبالكم قريباً في فرعنا الجديد بمدينة الدروة!";

function openConfirm(items) {
    document.getElementById("confirmText").textContent = CONFIRM_COPY;
    document.getElementById("confirmItems").textContent = items.length
        ? items.map((line) => `${line.name} ×${line.qty}`).join(" · ")
        : "";
    document.getElementById("copyState").textContent = "";
    document.getElementById("confirmModal").hidden = false;
}

document.getElementById("leadForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = normalizePhone(data.get("phone") || "");
    hideFormError();
    if (name.length < 2) {
        showFormError("كتب الاسم.");
        form.name.focus();
        return;
    }
    if (!isMoroccanPhone(phone)) {
        showFormError("دخل رقم هاتف مغربي صحيح، بحال 06XXXXXXXX.");
        form.phone.focus();
        return;
    }
    if (!cart.size) {
        const summary = document.getElementById("pickedSummary");
        summary.classList.add("is-warn");
        summary.textContent = "زيد حلويات من المنيو قبل تأكيد الحجز.";
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
        return;
    }
    const items = cartList().map((line) => ({ id: line.id, name: line.name, qty: line.qty }));
    saveLead({
        name,
        phone,
        city: "الدروة",
        items,
        code: DISCOUNT_CODE,
        at: new Date().toISOString()
    });
    openConfirm(items);
    form.reset();
    cart.clear();
    renderCart();
    renderMenu();
});

document.getElementById("vipForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = normalizePhone(data.get("phone") || "");
    const error = document.getElementById("vipError");
    error.hidden = true;
    if (name.length < 2) {
        error.hidden = false;
        error.textContent = "كتب الاسم.";
        form.name.focus();
        return;
    }
    if (!isMoroccanPhone(phone)) {
        error.hidden = false;
        error.textContent = "دخل رقم هاتف مغربي صحيح، بحال 06XXXXXXXX.";
        form.phone.focus();
        return;
    }
    saveLead({
        name,
        phone,
        city: "الدروة",
        source: "vip",
        items: [],
        code: DISCOUNT_CODE,
        at: new Date().toISOString()
    });
    openConfirm([]);
    form.reset();
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("confirmModal").hidden = true;
});
document.getElementById("confirmModal").addEventListener("click", (event) => {
    if (event.target.id === "confirmModal") event.currentTarget.hidden = true;
});
document.getElementById("copyCode").addEventListener("click", async () => {
    const state = document.getElementById("copyState");
    try {
        await navigator.clipboard.writeText(DISCOUNT_CODE);
        state.textContent = "تم نسخ الكود: " + DISCOUNT_CODE;
    } catch (error) {
        state.textContent = "الكود: " + DISCOUNT_CODE;
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    document.getElementById("cartDrawer").hidden = true;
    document.getElementById("confirmModal").hidden = true;
});

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
renderCart();
initHeroSlider();
tickCountdown();
setInterval(tickCountdown, 1000);
